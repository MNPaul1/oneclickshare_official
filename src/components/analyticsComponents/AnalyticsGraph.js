import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement, Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import "./AnalyticsGraph.css"
ChartJS.register(
  PointElement,
  Filler,
  LineElement,
  Title,
  Tooltip,
  Legend
);



export default function AnalyticsGraph(props) {
  return (<div style={{width:"100%"}}>
    <Line data={{
      labels: props.label,
      datasets: [
        {
          label: props.title,
          data: props.followers,
          fill: true,
          tension: 0.4,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)"
        },
      ]
}} />
  </div>)

}