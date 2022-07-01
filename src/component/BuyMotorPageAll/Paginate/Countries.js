import { Grid } from "@chakra-ui/react";
import CurrentItems from "./CurrentItems";

function Countries({ currentItems }) {
  return (
    <Grid
      templateColumns={[
        "repeat(1,1fr)",
        "repeat(1,1fr)",
        "repeat(2,1fr)",
        "repeat(3,1fr)",
        "repeat(3,1fr)",
      ]}
      gap="5"
      marginBottom={5}
    >
      <CurrentItems currentItems={currentItems} />
    </Grid>
  );
}

export default Countries;
