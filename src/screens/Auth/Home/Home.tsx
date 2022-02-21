import React, { useEffect } from "react";
import {
  Button,
  Card,
  Container,
  Input,
  Link,
  Title,
} from "../../../components/index";

const Home = (props: any) => {
  useEffect(() => {
    setTimeout(() => {
      props.redirect();
    }, 3000);
  }, []);
  return (
    <Container>
      <Title fontsize="50"> The Greatest App</Title>
      <Title fontsize="50" type="special">
        For
      </Title>
      <Title fontsize="50"> LOTTERY</Title>
    </Container>
  );
};

export default Home;
