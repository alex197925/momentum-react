/** @format */

import React from "react";
import { DataContainer } from "./DateStyles";

const GetDate = () => {
  const today = new Date();
  const currentDate =
    today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();

  return (
    <DataContainer>
      <p>{currentDate}</p>
    </DataContainer>
  );
};

export default GetDate;
