import React, { FC } from "react";

import { StyleSheet } from "react-native";
import CardStyle from "./CardStyle";

const Card: FC = (props: any) => {
  return <CardStyle style={styles.boxShadow}>{props.children}</CardStyle>;
};

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
export default Card;
