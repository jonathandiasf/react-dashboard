import { useEffect, useState } from "react";

export default function BitcoinCard() {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchBitcoin() {
    try {
      setLoading(true);
      setError(false);

      const res = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
        { cache: "no-store" }
      );

      if (!res.ok) throw new Error("API error");

      const data = await res.json();
      setPrice(data.bitcoin.usd);
    } catch (err) {
      console.error("Erro ao buscar Bitcoin:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBitcoin();

    // 🔄 Atualiza a cada 30 segundos
    const interval = setInterval(fetchBitcoin, 30000);
    return () => clearInterval(interval);
  }, []);

  /* ---------- UI STATES ---------- */

  if (loading) {
    return <p>⏳ Carregando preço do Bitcoin...</p>;
  }

  if (error) {
    return (
      <div>
        <p style={{ color: "red" }}>⚠️ Erro ao carregar Bitcoin</p>
        <button onClick={fetchBitcoin}>🔄 Tentar novamente</button>
      </div>
    );
  }

  return (
    <div>
      <h3>Bitcoin (USD)</h3>
      <p style={{ fontSize: 28, fontWeight: "bold" }}>
        ${price.toLocaleString()}
      </p>
      <small>Atualiza a cada 30s</small>
    </div>
  );
}
