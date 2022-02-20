import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ExpenditureTrends = () => {
  const [seriesBTC] = useState([
    {
      name: "BTC",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "BTC",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ]);

  const [seriesETH] = useState([
    {
      name: "ETH",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "ETH",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ]);

  const [seriesLTC] = useState([
    {
      name: "ETH",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "ETH",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ]);

  const [options] = useState({
    chart: {
      height: 40,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    xaxis: {
      labels: {
        rotate: 0, // no need to rotate since hiding labels gives plenty of room
        hideOverlappingLabels: false, // all labels must be rendered
      },
    },
  });

  return (
    <div className="col-lg-6 padding-left-0">
      <div className="card trns-2 graphD">
        <div className="card-body">
          <h4 className="card-title mb-4">Expenditure Trends </h4>
          <div className="fixed_height" id="trns2">
            <div className="row ">
              <div className="col-6">
                <div>
                  <h5>January 2022</h5>
                  <p className="text-muted text-truncate mb-0">
                    <i className="bx bx-rupee" />
                    95,025<sup>.39</sup>
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div>
                  <div id="area-sparkline-chart-1" className="apex-charts">
                    <ReactApexChart
                      options={options}
                      series={seriesBTC}
                      type="line"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row  ">
              <div className="col-6">
                <div>
                  <h5>December 2021</h5>
                  <p className="text-muted text-truncate mb-0">
                    <i className="bx bx-rupee" />
                    95,025<sup>.39</sup>
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div>
                  <div id="area-sparkline-chart-2" className="apex-charts">
                    <ReactApexChart
                      options={options}
                      series={seriesETH}
                      type="line"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row  ">
              <div className="col-6">
                <div>
                  <h5>November 2021</h5>
                  <p className="text-muted text-truncate mb-0">
                    <i className="bx bx-rupee" />
                    95,025<sup>.39</sup>
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div>
                  <div id="area-sparkline-chart-3" className="apex-charts">
                    <ReactApexChart
                      options={options}
                      series={seriesLTC}
                      type="line"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenditureTrends;
