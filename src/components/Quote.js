/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { QuoteContainer, QuoteText } from "./QuoteStyles";

const url = "https://type.fit/api/quotes";

const Quote = () => {
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

  if (!data) return null;
  console.log(data);

  return (
    <QuoteContainer>
      <QuoteText>{data[0].text}</QuoteText>
      <QuoteText>- {data[0].author.substr(0, 13)}</QuoteText>
    </QuoteContainer>
  );
};

export default Quote;
