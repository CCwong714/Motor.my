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

const SelectCountry = (props) => {
  return (
    <React.Fragment>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<AiFillCaretDown />}
          textAlign="left"
          marginBottom="5"
          w="100%"
        >
          {props.items.find((x) => x.value === props.value)?.label ||
            props.placeholder || (
              <Text fontWeight="normal" color="gray.500">
                Malaysia
              </Text>
            )}
        </MenuButton>
        <MenuList w="200px">
          {props.items.map((item, key) => (
            <MenuItem key={key} onClick={() => props.onChange(item.value)}>
              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </React.Fragment>
  );
};

export default SelectCountry;
