/** @format */

import React from "react";

const GetDate = () => {
  const today = new Date();
  const currentDate =
    today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();

  return (
    <div>
      <p>{currentDate}</p>
    </div>
  );
};

export default GetDate;
