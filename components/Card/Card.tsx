import React from "react";
import CardStyle from "./CardStyle";

const Card = (props: any) => {
  return <CardStyle>{props.children}</CardStyle>;
};

export default Card;
