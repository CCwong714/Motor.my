import React from "react";
// import { useParams } from "react-router-dom";
// import Gellary from "../Gallery/Gellary";
import { Box, Flex, Text, Link, Icon, Divider, Button } from "@chakra-ui/react";
// import sliderJson from "../../Slider.json";
import ShowMotorBody from "./ShowMotorBody";
import ShowMotorPageTop from "./ShowMotorPageTop";

function ShowMotorPage() {
  // const { id } = useParams();

  return (
    <Box>
      <ShowMotorPageTop/>
      <ShowMotorBody/>
    </Box>
  );
}

export default ShowMotorPage;
