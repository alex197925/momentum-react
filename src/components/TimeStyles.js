/** @format */

import styled from "styled-components";

export const Welcome = styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  padding: 1rem;
  -ms-transform: translate(-50%, 50%);
  transform: translate(-50%, -50%);
`;

export const TimeStamp = styled.p`
  font-size: 4rem;
  margin: 0;
  padding: 0;
  font-weight: 500;

  @media screen and (max-width: 600px) {
    font-size: 3rem;
  }
`;

export const Greeting = styled.p`
  font-size: 43.3px;
  font-weight: 600;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;
