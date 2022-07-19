import { useGlobalContext } from "../context";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const SearchForm = () => {
  const { inputText, setInputText, gamesList, setFilteredGamesList } =
    useGlobalContext();

  // function handles searching of the game via name
  const handleSearch = (e) => {
    setInputText(e.target.value);
    const filteredList = gamesList.filter((game) =>
      game.title.toLowerCase().includes(inputText)
    );
    setFilteredGamesList(filteredList);
  };
  // function clear the search field
  const handleClear = () => {
    setInputText("");
    setFilteredGamesList(gamesList);
  };

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ ease: "easeIn", duration: 1, delay: 1 }}
      className="searchform-container"
    >
      <form className="searchform" onSubmit={(e) => e.preventDefault()}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Game Name..."
            value={inputText}
            onChange={handleSearch}
            inputProps={{ "aria-label": "search game name" }}
          />
          {inputText.length === 0 ? (
            <IconButton sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          ) : (
            <IconButton
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={handleClear}
            >
              <CloseIcon />
            </IconButton>
          )}
        </Paper>
      </form>
    </motion.div>
  );
};

export default SearchForm;
