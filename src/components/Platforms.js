import { useGlobalContext } from "../context";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { motion } from "framer-motion";

const Platforms = () => {
  const { platforms, filteredPlatform, setFilteredPlatform } =
    useGlobalContext();
  return (
    <motion.div
      animate={{ x: [1000, 0], opacity: 1 }}
      transition={{
        delay: 1,
        x: { type: "spring", stiffness: 100 },
        default: { duration: 2 },
      }}
      className="platforms-btn-container"
    >
      <i className="filter-icon">
        <FilterAltIcon fontSize="large" />
      </i>
      <span>Filter</span>
      <FormControl
        sx={{ m: 1, minWidth: 120, backgroundColor: "white" }}
        size="small"
      >
        <InputLabel id="demo-select-small">Platforms</InputLabel>
        <Select
          label="platforms"
          value={filteredPlatform}
          onChange={(e) => setFilteredPlatform(e.target.value)}
        >
          {platforms.map((platform, index) => {
            return (
              <MenuItem key={index} value={platform}>
                {platform}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </motion.div>
  );
};

export default Platforms;
