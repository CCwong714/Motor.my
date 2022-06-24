import {
  Box,
  Button,
  MenuButton,
  MenuItem,
  MenuList,
  Menu,
  Flex,
  Grid,
  Link,
  Icon,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import SideBarMenu from "../SideBarAll/SideBarMenu";
import { IoMdContact } from "react-icons/io";

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
        paddingBottom="3"
      >
        <Flex>
          <SideBarMenu />
            <Link
              variant="ghost"
              _hover={{ backgroundColor: "transparent" }}
              fontWeight="bold"
              fontSize="2xl"
              marginRight={10}
            >
              Motor
            </Link>
          
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<BsChevronDown />}
              marginRight={5}
              variant="ghost"
              _hover={{ backgroundColor: "transparent" }}
              display={["none", "none", "none", "none", "block"]}
            >
              Buy Motor
            </MenuButton>
            <MenuList>
              <MenuItem color="blue.400">View all Motor > </MenuItem>
              <Grid templateColumns="repeat(3,1fr)" fontSize="sm">
                <MenuItem>Yamaha</MenuItem>
                <MenuItem>Honda</MenuItem>
                <MenuItem>Kawasaki</MenuItem>
                <MenuItem>Sym</MenuItem>
                <MenuItem>Harley-Davidson</MenuItem>
                <MenuItem>Suzuki</MenuItem>
                <MenuItem>Benelli</MenuItem>
                <MenuItem>Ducati</MenuItem>
                <MenuItem>BMW</MenuItem>
                <MenuItem>Vespa</MenuItem>
                <MenuItem>KTM</MenuItem>
                <MenuItem>Aprilia</MenuItem>
                <MenuItem>Brixton</MenuItem>
                <MenuItem>CMC</MenuItem>
                <MenuItem>Daiichi</MenuItem>
                <MenuItem>GPX</MenuItem>
                <MenuItem>Keeway</MenuItem>
                <MenuItem>KTNS</MenuItem>
                <MenuItem>Kymco</MenuItem>
                <MenuItem>Modenas</MenuItem>
                <MenuItem>Moto Guzzi</MenuItem>
                <MenuItem>Piaggio</MenuItem>
                <MenuItem>Royal Enfield</MenuItem>
                <MenuItem>Scomadi</MenuItem>
                <MenuItem>Sherco</MenuItem>
                <MenuItem>Treeletrik</MenuItem>
                <MenuItem>Triumph</MenuItem>
                <MenuItem>AJP</MenuItem>
                <MenuItem>CFMoto</MenuItem>
                <MenuItem>Eclimo</MenuItem>
                <MenuItem>Moto Morini</MenuItem>
                <MenuItem>NIU</MenuItem>
                <MenuItem>Ottimo</MenuItem>
                <MenuItem>QJ Motor</MenuItem>
                <MenuItem>SM Sport</MenuItem>
                <MenuItem>WMoto</MenuItem>
                <MenuItem>Zontes</MenuItem>

                
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
            display={["none", "none", "none", "none", "block"]}
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
              display={["none", "none", "none", "none", "block"]}
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
            display={["none", "none", "none", "none", "block"]}
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
              display={["none", "none", "none", "none", "block"]}
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
              display={["none", "none", "none", "none", "block"]}
            >
              Dealers
            </MenuButton>
            <MenuList>
              <MenuItem>Dealers Sign Up</MenuItem>
              <MenuItem>Dealers Login</MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <Flex alignItems="center">
          <Button
            marginRight={5}
            variant="ghost"
            _hover={{ backgroundColor: "transparent" }}
            display={["none", "none", "none", "none", "block"]}
          >
            1-800-82-3388
          </Button>

          <Button
            marginRight={5}
            variant="ghost"
            _hover={{ backgroundColor: "blue.200" }}
            display={["none", "none", "none", "none", "block"]}
          >
            Sign Up/Login
          </Button>

          <Link
            display={["block", "block", "block", "block", "none"]}
            marginRight={5}
            _hover="none"
          >
            Buy
          </Link>
          <Link
            display={["block", "block", "block", "block", "none"]}
            marginRight={5}
            _hover="none"
          >
            Sell
          </Link>
          <Icon
            display={["block", "block", "block", "block", "none"]}
            as={IoMdContact}
            h="34"
            marginRight="3"
            color="black"
          />
        </Flex>
      </Box>
    </>
  );
}

export default MenuAndMenuButton;
