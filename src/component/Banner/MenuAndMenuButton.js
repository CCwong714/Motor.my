import {
  Box,
  Button,
  MenuButton,
  MenuItem,
  MenuList,
  Menu,
  Flex,
  Grid,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function MenuAndMenuButton() {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginLeft={6}
        marginRight={6}
        marginTop={5}
      >
        <Flex>
          <Button
            variant="ghost"
            _hover={{ backgroundColor: "transparent" }}
            fontWeight="bold"
            fontSize="2xl"
            marginRight={10}
          >
            Motor
          </Button>

          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<BsChevronDown />}
              marginRight={5}
              variant="ghost"
              _hover={{ backgroundColor: "transparent" }}
            >
              Buy Motor
            </MenuButton>
            <MenuList>
              <MenuItem color="blue.400">View all Motor > </MenuItem>
              <Grid templateColumns="repeat(2,1fr)" fontSize="sm">
                <MenuItem>Audi</MenuItem>
                <MenuItem>BMW</MenuItem>
                <MenuItem>Ford</MenuItem>
                <MenuItem>Honda</MenuItem>
                <MenuItem>Hyundai</MenuItem>
                <MenuItem>Inokom</MenuItem>
                <MenuItem>Isuzu</MenuItem>
                <MenuItem>Kia</MenuItem>
                <MenuItem>...</MenuItem>
                <MenuItem>...</MenuItem>
                <MenuItem>...</MenuItem>
                <MenuItem>...</MenuItem>
                <MenuItem>...</MenuItem>
                <MenuItem>...</MenuItem>
                <MenuItem>...</MenuItem>
                <MenuItem>...</MenuItem>
                <MenuItem>...</MenuItem>
                <MenuItem>...</MenuItem>
                <MenuItem>...</MenuItem>
                <MenuItem>...</MenuItem>
                <MenuItem>...</MenuItem>
                <MenuItem>...</MenuItem>
                <MenuItem>...</MenuItem>
              </Grid>
              <MenuItem color="blue.400">
                Get Motor Model Recommendations >
              </MenuItem>
            </MenuList>
          </Menu>

          <Button
            marginRight={5}
            variant="ghost"
            _hover={{ backgroundColor: "transparent" }}
          >
            Sell Motor
          </Button>

          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<BsChevronDown />}
              marginRight={5}
              variant="ghost"
              _hover={{ backgroundColor: "transparent" }}
            >
              Financing
            </MenuButton>
            <MenuList>
              <MenuItem>Motor Load</MenuItem>
              <MenuItem>Motor Insurance</MenuItem>
            </MenuList>
          </Menu>

          <Button
            marginRight={5}
            variant="ghost"
            _hover={{ backgroundColor: "transparent" }}
          >
            FAQ
          </Button>

          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<BsChevronDown />}
              marginRight={5}
              variant="ghost"
              _hover={{ backgroundColor: "transparent" }}
            >
              About Motorsome
            </MenuButton>
            <MenuList>
              <MenuItem>Our Story</MenuItem>
              <MenuItem>Motor Certified Lab</MenuItem>
              <MenuItem>Buying from Motor</MenuItem>
              <MenuItem>Quality Assured Motor</MenuItem>
              <MenuItem>Motor Capital</MenuItem>
              <MenuItem>Articles</MenuItem>
              <MenuItem>News</MenuItem>
              <MenuItem>Contact Us</MenuItem>
              <MenuItem>Locate us</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<BsChevronDown />}
              marginRight={5}
              variant="ghost"
              _hover={{ backgroundColor: "transparent" }}
            >
              Dealers
            </MenuButton>
            <MenuList>
              <MenuItem>Dealers Sign Up</MenuItem>
              <MenuItem>Dealers Login</MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <Flex>
          <Button
            marginRight={5}
            variant="ghost"
            _hover={{ backgroundColor: "transparent" }}
          >
            1-800-82-3388
          </Button>

          <Button
            marginRight={5}
            variant="ghost"
            _hover={{ backgroundColor: "blue.200" }}
          >
            Sign Up/Login
          </Button>
        </Flex>
      </Box>
    </>
  );
}

export default MenuAndMenuButton;
