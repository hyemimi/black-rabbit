import React, { ReactElement } from "react";
import styled from "styled-components";

const GreenCard = styled.div`
  /* Rectangle 36 */

  position: relative;
  width: 620px;
  height: 540px;
  left: 416px;
  top: 282px;

  /* 포인트 */

  background: #b6dcbe;
  border-radius: 10px;
`;

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <GreenCard>{children}</GreenCard>;
};

export default Card;
