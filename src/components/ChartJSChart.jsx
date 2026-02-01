import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function ChartJSChart({
  type,
  title,
  labels,
  data,
}) {
  const isDark = document.body.style.background === "rgb(15, 23, 42)";

  const textColor = isDark ? "#f1f5f9" : "#222";

  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        backgroundColor: [
          "#60a5fa",
          "#34d399",
          "#fbbf24",
          "#f87171",
        ],
        borderColor: "#60a5fa",
        borderWidth: 2,
      },
    ],
  };

  const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 1200,
    easing: "easeOutQuart",
  },
  interaction: {
    mode: "index",
    intersect: false,
  },
  plugins: {
    legend: {
      labels: {
        color: textColor,
      },
    },
    title: {
      display: true,
      text: title,
      color: textColor,
      font: {
        size: 16,
        weight: "bold",
      },
    },
    tooltip: {
      backgroundColor: isDark ? "#020617" : "#ffffff",
      titleColor: isDark ? "#f1f5f9" : "#020617",
      bodyColor: isDark ? "#f1f5f9" : "#020617",
      borderWidth: 1,
      borderColor: "#64748b",
    },
  },
  scales: {
    x: {
      grid: {
        color: isDark ? "#334155" : "#e5e7eb",
      },
      ticks: {
        color: textColor,
      },
    },
    y: {
      grid: {
        color: isDark ? "#334155" : "#e5e7eb",
      },
      ticks: {
        color: textColor,
      },
    },
  },
};


  if (type === "bar") return <Bar data={chartData} options={options} />;
  if (type === "line") return <Line data={chartData} options={options} />;
  if (type === "pie") return <Pie data={chartData} options={options} />;

  return null;
}
