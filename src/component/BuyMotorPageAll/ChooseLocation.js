import React, { useState } from "react";
import { Button,Text } from "@chakra-ui/react";

function ChooseLocation({locationName}) {
  const [select, setSelect] = useState(false);

  const onClick = () => {
    setSelect((current) => !current);
    select ? setSelect(false) : setSelect(true);
  };

  return (
    <>
      <Button onClick={onClick} w="100%" h="150px">{select ? <Text color="blue">{locationName}</Text> : <Text color="black">{locationName}</Text>}</Button>
     
    </>
  );
}

export default ChooseLocation;
