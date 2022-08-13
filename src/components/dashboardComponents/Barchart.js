import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  categoryPercentage: 0.13,
  borderRadius: 26,
  barPercentage:0.6,
  plugins: {
    legend: {
      position: 'top',
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 10,
          boxHeight: 7
        },
        datasets: {
          padding: 0,
          width:0
        },
    },
    title: {
      display: true,
      position:'top',
      text: 'Recent Post Analysis'
    },
  },
};

const labels = ['INSTAGRAM', 'YOUTUBE'];

const likes = [5220,6540]
const Comments = [2223,3325]
const views_count = [6100,1563]

export const data = {
  labels,
  datasets: [
    {
      label: 'Likes',
      data: likes,
      backgroundColor: 'rgb(216, 187, 40)',
    },
    {
      label: 'Views',
      data: views_count,
      backgroundColor: 'rgb(41, 203, 151)',
    },
    {
      label: 'Comments',
      data: Comments,
      backgroundColor: 'rgb(0, 98, 255)',     
    },
  ],
};

export default function Barchart() {
  return <div style={{width:"100%"}}>
    <Bar options={options} data={data} />;
  </div>

}