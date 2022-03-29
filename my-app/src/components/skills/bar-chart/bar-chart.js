import './bar-chart.css';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const DATA = {
  labels: ['JavaScript', 'HTML & CSS', 'C++', 'Python',
           'Java', 'Assembly'],
  datasets: [
    {
      label: 'Programming Languages',
      categoryPercentage: 0.4,
      backgroundColor: "#fff",
      borderRadius: Number.MAX_VALUE,
      borderWidth: 2,
      borderSkipped: false,
      data: [5, 5, 4, 2, 2, 2]
    }
  ]
}

function BarChart() {
  return (
    <div className="bar-chart">
        <Bar
          data={DATA}
          height = {"200%"}
          width = {"200%"}
          options={{
            indexAxis: 'y',
            plugins: {
              legend: {
                display: false
              },
            },
            scales: {
            y: {
                ticks: {
                  color: "#ffff",
                  font: {
                    size: 15,
                  }
                }
            },
            x: {
              display: false
            }
          }
          }}
        />
    </div>
  );
}

export default BarChart;
