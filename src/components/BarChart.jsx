import React from "react";
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";

const BarChart = ({
  xData,
  yData,
  title,
  legend,
  yAxisLabel,
  xAxisLabel,
  backgroundColor,
}) => {
  return (
    <div
      style={{
        padding: "30px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Bar
        data={{
          labels: xData,
          datasets: [
            {
              label: legend,
              backgroundColor: backgroundColor,
              //   borderColor: "rgb(0, 99, 132)",
              data: yData,
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: title,
            },
          },
        }}
      />
      <span style={{ textAlign: "center" }}>
        X-axis: {xAxisLabel} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Y-axis:{" "}
        {yAxisLabel}
      </span>
    </div>
  );
};

export default BarChart;
