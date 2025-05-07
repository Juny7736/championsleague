import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { RealtimeChannel } from '@supabase/supabase-js';

export function useRealtimeData<T>(
  table: string,
  initialData: T[],
  options: { 
    orderBy?: { column: string; ascending?: boolean };
    filter?: Record<string, any> 
  } = {}
) {
  const [data, setData] = useState<T[]>(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let channel: RealtimeChannel;

    async function fetchData() {
      try {
        setLoading(true);
        let query = supabase.from(table).select('*');

        // Only apply ordering if both orderBy and column are defined
        if (options.orderBy?.column) {
          const ascending = options.orderBy.ascending ?? true;
          query = query.order(options.orderBy.column, { ascending });
        }

        if (options.filter) {
          Object.entries(options.filter).forEach(([key, value]) => {
            query = query.eq(key, value);
          });
        }

        const { data: fetchedData, error: fetchError } = await query;

        if (fetchError) throw fetchError;
        setData(fetchedData as T[]);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    }

    function setupSubscription() {
      channel = supabase
        .channel(`${table}_changes`)
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: table,
          },
          async (payload) => {
            await fetchData();
          }
        )
        .subscribe();
    }

    fetchData();
    setupSubscription();

    return () => {
      if (channel) {
        supabase.removeChannel(channel);
      }
    };
  }, [table, options.orderBy?.column, options.orderBy?.ascending, JSON.stringify(options.filter)]);

  return { data, loading, error };
}