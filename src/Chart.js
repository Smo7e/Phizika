import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js"; // Import Chart and registerables

Chart.register(...registerables); // Register all necessary components

const ChartComponent = ({ zArr, bArr, arr1, arr2, arr3 }) => {
  const lineChartData = {
    labels: zArr, // Updated the label
    datasets: [
      {
        data: bArr,
        label: "kos1",
        borderColor: "#3333ff",
        fill: true,
        lineTension: 0,
      },
      {
        data: arr1,
        label: "pryam1",
        borderColor: "#ff3333",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true,
        lineTension: 0,
      },

      {
        data: arr2,
        label: "pryam2",
        borderColor: "#ff3333",
        backgroundColor: "rgba(255, 0, 255, 0.5)",
        fill: true,
        lineTension: 0,
      },
      {
        data: arr3,
        label: "pryam3",
        borderColor: "#ff3333",
        backgroundColor: "rgba(0, 255, 0, 0.5)",
        fill: true,
        lineTension: 0,
      },
    ],
  };

  return (
    <Line
      width={160}
      height={60}
      options={{
        title: {
          display: true,
          text: "",
          fontSize: 20,
        },
        legend: {
          display: true,
          position: "top",
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                // Здесь вы можете настроить отображение значения точно так, как вам нужно
                return (
                  tooltipItem.dataset.label + ": " + tooltipItem.raw.toFixed(5)
                ); // Отобразить точное значение
              },
            },
          },
        },
      }}
      data={lineChartData}
    />
  );
};

export default ChartComponent;
