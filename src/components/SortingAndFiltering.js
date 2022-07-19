import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import Platforms from "./Platforms";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { motion } from "framer-motion";

const SortingAndFiltering = () => {
  const [sortOrder, setSortOrder] = useState("");
  const { filteredGamesList, setFilteredGamesList } = useGlobalContext();
  // function handles sorting in ascending order(score)
  const handleSortAscend = () => {
    const sortedList = [...filteredGamesList].sort((a, b) => {
      return a.score - b.score;
    });
    setFilteredGamesList(sortedList);
  };
  // function handles sorting in descending order(score)
  const handleSortDescend = () => {
    const sortedList = [...filteredGamesList].sort((a, b) => {
      return b.score - a.score;
    });
    setFilteredGamesList(sortedList);
  };

  useEffect(() => {
    if (sortOrder === "ascend") {
      handleSortAscend();
    } else if (sortOrder === "descend") {
      handleSortDescend();
    }
    //eslint-disable-next-line
  }, [sortOrder]);
  return (
    <div className="filter-container">
      <motion.div
        animate={{ x: [-1000, 0], opacity: 1 }}
        transition={{
          delay: 1,
          x: { type: "spring", stiffness: 100 },
          default: { duration: 2 },
        }}
      >
        <i className="filter-icon">
          <FilterAltIcon fontSize="large" />
        </i>
        <span>Filter</span>
        <FormControl
          sx={{ m: 1, minWidth: 120, backgroundColor: "white" }}
          size="small"
        >
          <InputLabel id="demo-select-small">Scores</InputLabel>
          <Select
            value={sortOrder}
            label="Scores"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <MenuItem value="" disabled>
              <em>None</em>
            </MenuItem>
            <MenuItem value={"ascend"}>Low to high</MenuItem>
            <MenuItem value={"descend"}>High to Low</MenuItem>
          </Select>
        </FormControl>
      </motion.div>
      <Platforms />
    </div>
  );
};

export default SortingAndFiltering;
