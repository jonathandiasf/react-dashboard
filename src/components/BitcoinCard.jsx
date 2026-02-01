import { useEffect, useState } from "react";

export default function BitcoinCard() {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const REFRESH_TIME = 15000; // 15 segundos

  async function fetchBitcoin() {
    try {
      setError(false);

      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl"
      );

      if (!response.ok) throw new Error("Erro na API");

      const data = await response.json();
      setPrice(data.bitcoin.brl);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBitcoin();

    const interval = setInterval(fetchBitcoin, REFRESH_TIME);

    return () => clearInterval(interval);
  }, []);

  if (loading) return <p>Carregando Bitcoin...</p>;
  if (error) return <p>Erro ao carregar o preço do Bitcoin</p>;

  return (
    <div>
      <h3>Bitcoin (BRL)</h3>
      <p style={{ fontSize: 24, fontWeight: "bold" }}>
        R$ {price.toLocaleString("pt-BR")}
      </p>
      <small>Atualiza a cada 15 segundos</small>
    </div>
  );
}
