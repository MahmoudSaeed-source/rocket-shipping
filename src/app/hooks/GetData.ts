import { useState, useEffect } from "react";

export function useFetchUrl<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();
    setLoading(true);

    const load = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error("URL not responding");
        }

        const json = (await response.json()) as T;
        setData(json);

      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    load();

    return () => controller.abort();
  }, [url]);

  return { data, error, loading };
}
