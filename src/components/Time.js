/** @format */

import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import {Welcome, TimeStamp, Greeting} from "./TimeStyles"

const Time = () => {
  let today = new Date();

  const greeting = () => {
    if (today.getHours() >= 5 && today.getHours() < 11) {
      return "Good Morning Dear.";
    } else if (today.getHours() >= 11 && today.getHours() < 17) {
      return "Good Afternoon Dear.";
    } else if (today.getHours() >= 17 && today.getHours() < 24) {
      return "Good Evening Dear.";
    } else {
      return "What are you doing up at this hour?";
    }
  };

  return (
    <Welcome>
      <TimeStamp>
        <Moment format='LT'></Moment>
      </TimeStamp>
      <Greeting>{greeting()}</Greeting>
    </Welcome>
  );
};

export default Time;
