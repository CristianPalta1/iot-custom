import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { ref, onValue } from "firebase/database";
import { database } from "../utils/firebase-config";
import "chart.js/auto";

const DataChart = () => {
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);

  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [],
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
      {
        label: "Humidity (%)",
        data: [],
        borderColor: "rgba(153,102,255,1)",
        fill: false,
      },
    ],
  });

  useEffect(() => {
    const dataRef = ref(database, "remote_measures");
    onValue(dataRef, (snapshot) => {
      const { temperature, humidity } = snapshot.val();
      const temperatureValues = Object.values(temperature);
      const humidityValues = Object.values(humidity);
      setTemperature(temperatureValues[temperatureValues.length - 1]);
      setHumidity(humidityValues[humidityValues.length - 1]);
      const labels = [];
      const temperatureData = [];
      const humidityData = [];

      Object.values(temperature).forEach((value, index) => {
        labels.push(index);
        temperatureData.push(value);
      });

      Object.values(humidity).forEach((value, index) => {
        labels.push(index);
        humidityData.push(value);
      });

      setData({
        labels: labels,
        datasets: [
          {
            label: "Temperature (°C)",
            data: temperatureData,
            borderColor: "rgba(75,192,192,1)",
            fill: false,
          },
          {
            label: "Humidity (%)",
            data: humidityData,
            borderColor: "rgba(153,102,255,1)",
            fill: false,
          },
        ],
      });
    });
  }, []);

  return (
    <div>
      <h1>Data from Firebase</h1>
      <Line data={data} />
      <div>
        <h2>Temperatura</h2>
        <p>{temperature}</p>
        <h2>Humedad</h2>
        <p>{humidity}</p>
      </div>
    </div>
  );
};

export default DataChart;
