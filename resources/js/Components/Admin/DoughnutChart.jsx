import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const DoughnutChart = () => {
  const data = {
    labels: ['Buku Sedang Proses Peminjaman', 'Buku Tersedia Di Perpustakaan'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [50, 50],
        backgroundColor: ['#FF4C1D', '#FF8B03'],
        hoverOffset: 4,
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default DoughnutChart;
