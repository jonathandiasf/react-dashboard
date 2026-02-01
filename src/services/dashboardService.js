// Simula uma API real (delay de rede)
export async function getDashboardCharts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          type: "bar",
          title: "Vendas Mensais",
          labels: ["Jan", "Fev", "Mar", "Abr"],
          data: [1200, 1900, 800, 1500],
        },
        {
          id: 2,
          type: "line",
          title: "Faturamento",
          labels: ["Jan", "Fev", "Mar", "Abr"],
          data: [3000, 4200, 2800, 5000],
        },
        {
          id: 3,
          type: "pie",
          title: "Participação por Mês",
          labels: ["Jan", "Fev", "Mar", "Abr"],
          data: [1200, 1900, 800, 1500],
        },
      ]);
    }, 1000); // 1s delay
  });
}

