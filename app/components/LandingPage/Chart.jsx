import React, { useState, useEffect, useRef } from "react";
import { PlaceMentData } from "../../utils/data";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);
function App({label, data, max = 100}) {
  const [userData, setUserData] = useState({
    labels: PlaceMentData.map((data) => data.year),
    datasets: [
      {
        label: label,
        data: data,
        backgroundColor: "#f8f8ff",
        borderRadius: 8,
      },
    ],
  });

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        display: true,
        color: "black",
        font: {
          size: 18,
        },
        formatter: (value) => value.toLocaleString(),
      },
    },
    scales: {
      x: {
        display: true,
        ticks: {
          color: "white",
        },
      },
      y: {
        display: true,
        ticks: {
          color: "white",
        },
        suggestedMax: max,
      },
    },
    elements: {
      line: {
        borderWidth: 0,
      },
      point: {
        radius: 0,
      },
    },
    animation: {
      duration: 1000,
      easing: "easeInOutQuad",
      animateScale: true,
      animateRotate: true,
      hover: {
        animationDuration: 2000,
        animationEasing: "easeInOutCubic",
        enabled: true,
      },
      
    },
  };

  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !chartInstanceRef.current) {
            chartInstanceRef.current = new Chart(chartRef.current, {
              type: "bar",
              data: userData,
              options: options,
            });
            observer.unobserve(chartRef.current);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, [userData, options]);

  return (
    <div className="h-[50vw] w-[70vw] sm:mt-[0] mt-[10vw] sm:w-[35vw] sm:h-[30vw]">
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default App;

