import { Flex, Text, Image } from "@chakra-ui/react";
import GooglePlay from "../../image/Google.png";
import App from "../../image/App.png";
import Huawei from "../../image/Huawei.png"
function FooterCenter() {
  return (
    <>
      <Flex direction="column" marginX="5" marginY="5">
        <Text color="white" marginBottom="2">Download the App</Text>
        <Flex direction={["column","row","row","row","row" ]}marginBottom="5">
          <Image src={GooglePlay} w="120px" marginRight="3" marginBottom={2}/>
          <Image src={App} w="120px" bgColor="black" marginRight="3" marginBottom={2}/>
          <Image src={Huawei} w="120px" bgColor="black" marginRight="3" marginBottom={2}/>
        </Flex>
      </Flex>
    </>
  );
}

export default FooterCenter;
