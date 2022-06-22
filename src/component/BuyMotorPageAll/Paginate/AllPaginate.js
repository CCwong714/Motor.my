import { Box } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Countries from './Countries';
import Pagination from './Pagination';

function AllPaginate() {
  // Store the results coming from the api
  const [countries, setCountries] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 18;

  // Get data from the api
  useEffect(() => {
    const url = 'https://restcountries.com/v3.1/all';

    axios.get(url).then((res) => {
      setCountries(res.data);
    });
  }, []);

  // Update to display a new set of result
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(countries.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(countries.length / itemsPerPage));
  }, [countries, itemOffset, itemsPerPage]);

  // Invoke when user clicks to request another page
  function handlePageClick(e) {
    const newOffset = (e.selected * itemsPerPage) % countries.length;
    setItemOffset(newOffset);
  }

  // https://restcountries.com/v3.1/name/{name}

  return (
    <Box marginX={8} marginY={20}>
      <Countries currentItems={currentItems} />
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </Box>
  );
}

export default AllPaginate;
