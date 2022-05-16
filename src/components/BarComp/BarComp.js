import React from "react";
import { makeStyles } from "@mui/styles";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useSelector } from "react-redux";

function BarComp() {
  const barData = useSelector((state) => state.dashboardReducer.barData);
  let labelforBarChat = [];
  let dataItemsforBarChart = [];

  barData?.forEach((item) => {
    labelforBarChat.push(item.appSiteId);
    dataItemsforBarChart.push(item.impressions_offered);
  });
  const dataForBarChart = {
    labels: labelforBarChat,
    datasets: [
      {
        label: "Bar Chart",
        backgroundColor: "#EC932F",
        borderWidth: 1,
        data: dataItemsforBarChart,
      },
    ],
  };

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        height: "45em",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Bar
        data={dataForBarChart}
        width={"100%"}
        height={"25em"}
        options={{
          title: {
            display: true,
            text: "Bar Chart Details",
            fontSize: 16,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}

export default BarComp;
