import { useEffect, useState } from "react";

export function useBitcoin() {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchBitcoin() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl,usd"
        );
        const data = await res.json();

        setPrice({
          brl: data.bitcoin.brl,
          usd: data.bitcoin.usd,
        });
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchBitcoin();
  }, []);

  return { price, loading, error };
}
