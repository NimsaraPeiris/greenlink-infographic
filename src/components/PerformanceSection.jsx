import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function PerformanceSection() {
  const chartData = {
    labels: ['0:00', '1:00', '2:00', '3:00', '3:15', '4:00', '5:00', '6:00'],
    datasets: [
      {
        label: 'Transport Temperature (°C)',
        data: [18.3, 19.5, 20.8, 21.9, 23.5, 24.8, 25.7, 26.2],
        borderColor: '#004AAD',
        backgroundColor: 'rgba(0, 74, 173, 0.1)',
        fill: true,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 7,
        pointBackgroundColor: '#004AAD'
      },
      {
        label: 'Breach Threshold (°C)',
        data: [22, 22, 22, 22, 22, 22, 22, 22],
        borderColor: '#dc2626',
        borderDash: [5, 5],
        fill: false,
        pointRadius: 0,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 18,
        max: 27,
        beginAtZero: false,
        title: {
          display: true,
          text: 'Temperature (°C)'
        },
        grid: {
          color: '#e2e8f0'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Time (Hours)'
        },
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
        }
      },
      tooltip: {
        backgroundColor: '#020617',
        titleFont: {
          weight: 'bold'
        },
        bodySpacing: 4,
        padding: 12,
        callbacks: {
          title: function(tooltipItems) {
            const item = tooltipItems[0];
            let label = item.chart.data.labels[item.dataIndex];
            if (Array.isArray(label)) {
              return label.join(' ');
            } else {
              return label;
            }
          }
        }
      }
    },
    interaction: {
      mode: 'index',
      intersect: false,
    }
  };

  return (
    <section className="py-6 sm:py-12 md:py-16 px-3 sm:px-4 overflow-x-hidden">
      <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#004AAD] text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 leading-tight px-1 sm:px-2">Performance Deep Dive: Validated Results</h2>
      <p className="text-sm xs:text-base sm:text-lg md:text-xl text-slate-600 text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed px-1 sm:px-2">
        Data is the core of GreenLink. This section showcases the performance of our two key systems: the IoT sensor's ability to detect failure and the blockchain's speed and cost-effectiveness.
      </p>
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-start md:items-center">
        <div className="bg-white rounded-lg sm:rounded-xl shadow-2xl p-3 sm:p-4 md:p-6">
          <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#004AAD] mb-2 sm:mb-3 md:mb-4 text-center leading-tight">KPI 1: IoT Breach Detection</h3>
          <p className="text-slate-600 mb-3 sm:mb-4 md:mb-6 text-center text-xs xs:text-sm sm:text-base leading-relaxed">
            This chart simulates a 6-hour journey where the temperature rises significantly due to improper handling, starting at <strong>18.3°C</strong> and quickly <strong>exceeding the 22°C breach threshold</strong>.
          </p>
          <div className="chart-container">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#004AAD] mb-2 sm:mb-3 md:mb-4 text-center leading-tight">KPI 2: Polygon Blockchain Performance</h3>
          <div className="stat-card hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold">~4.5 sec</span>
            <p className="text-base xs:text-lg sm:text-xl font-semibold mt-1.5 sm:mt-2">Transaction Confirmation</p>
            <p className="text-xs sm:text-sm opacity-90 mt-0.5 sm:mt-1">(Target: &lt; 10s)</p>
          </div>
          <div className="stat-card hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold">&lt;0.001</span>
            <p className="text-base xs:text-lg sm:text-xl font-semibold mt-1.5 sm:mt-2">Avg. Gas Cost (MATIC)</p>
            <p className="text-xs sm:text-sm opacity-90 mt-0.5 sm:mt-1">(Proves commercial viability)</p>
          </div>
          <div className="stat-card hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold">100%</span>
            <p className="text-base xs:text-lg sm:text-xl font-semibold mt-1.5 sm:mt-2">Data Immutability</p>
            <p className="text-xs sm:text-sm opacity-90 mt-0.5 sm:mt-1">(Verified on Polygonscan)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PerformanceSection;