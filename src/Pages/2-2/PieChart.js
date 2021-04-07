import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-google-charts";
import { CHART_JSON_DATA } from "../../../src/config";

const PieChart = () => {
  const [datas, setDatas] = useState([]);

  const getChartData = async () => {
    const res = await axios.get(CHART_JSON_DATA);
    setDatas(res.data.data);
  };

  useEffect(() => {
    getChartData();
  }, []);

  return (
    <Chart
      width={"1100px"}
      height={"800px"}
      chartType='PieChart'
      loader={<div>Loading Chart</div>}
      data={datas}
      options={{
        title: "My Daily Activities",
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
};

export default PieChart;
