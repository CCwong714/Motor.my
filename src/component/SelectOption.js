import React from "react";
import {
  MenuButton,
  MenuItem,
  MenuList,
  Menu,
  Button,
  Text,
} from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";

const SelectOption = (props) => {
  return (
    <React.Fragment>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<AiFillCaretDown />}
          w="100%"
          textAlign="left"
          marginBottom="5"
        >
          {props.items1.find((x) => x.value === props.value)?.label ||
            props.placeholder || (
              <Text fontWeight="normal" color="gray.500">
                Selcet Motor Brand
              </Text>
            )}
        </MenuButton>
        <MenuList w="370px">
          <Text paddingLeft={3} fontSize="sm" color="blue.400">
            Popular Brand
          </Text>
          {props.items1.map((item, key) => (
            <MenuItem key={key} onClick={() => props.onChange(item.value)}>
              {item.label}
            </MenuItem>
          ))}
          
          
          <Text paddingLeft={3} fontSize="sm" color="blue.400">
            All Brand
          </Text>
          {props.items2.map((item, key) => (
            <MenuItem key={key} onClick={() => props.onChange(item.value)}>
              {item.label}
            </MenuItem>
          ))}
          
        </MenuList>
      </Menu>
    </React.Fragment>
  );
};

export default SelectOption;
