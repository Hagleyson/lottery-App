import React, { useEffect } from "react";
import {
  Button,
  Card,
  Container,
  Input,
  Link,
  Title,
} from "../../../components/index";

type propsType ={
  redirect:()=>void
}
const Home = (props: propsType) => {
  useEffect(() => {
    setTimeout(() => {
      props.redirect();
    }, 3000);
  }, []);
  return (
    <Container type="initial">
      <Title centered fontsize="50"> The Greatest App</Title>
      <Title centered fontsize="50" type="special">
        For
      </Title>
      <Title centered fontsize="50"> LOTTERY</Title>
    </Container>
  );
};

export default Home;
