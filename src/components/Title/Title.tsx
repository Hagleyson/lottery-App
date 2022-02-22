import { FC } from "react";
import { TitleStyle } from "./TitleStyle";

type propsType = {
  fontsize?: string;
  color?: string;
  type?: string;
  centered?:boolean
};

const Title: FC<propsType> = (props) => {
  return (
    <TitleStyle {...props} type={props.type}>
      {props.children}
    </TitleStyle>
  );
};
export default Title;
