/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=antwerpen&units=metric&appid=2d8027559ee4c08ed99ff31fa9fb7e6e";

const Weather = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  if (!data) return null;

  return (
    <div>
      <p>{data.main.temp.toFixed(0)}</p>
    </div>
  );
};

export default Weather;
