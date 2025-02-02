import { Line } from "react-chartjs-2";
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

const WeeklyChart = () => {
  const weeklyData = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        label: "Weekly Progress",
        data: [10, 12, 8, 15, 20, 14, 13],
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        borderColor: "#4CAF50",
        fill: true,
      },
    ],
  };

  return <Line data={weeklyData} />;
};

export default WeeklyChart;
