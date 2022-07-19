import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // used to handle state of the search bar.
  const [inputText, setInputText] = useState("");
  // used to handle state of the list of games.
  const [gamesList, setGamesList] = useState([]);
  const [filteredGamesList, setFilteredGamesList] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [filteredPlatform, setFilteredPlatform] = useState("");

  // handles filtering of platform
  const handleFilterPlatform = () => {
    switch (filteredPlatform) {
      case "PlayStation Vita":
        setFilteredGamesList(
          gamesList.filter((game) => game.platform === filteredPlatform)
        );
        break;
      case "iPad":
        setFilteredGamesList(
          gamesList.filter((game) => game.platform === filteredPlatform)
        );
        break;
      case "Xbox 360":
        setFilteredGamesList(
          gamesList.filter((game) => game.platform === filteredPlatform)
        );
        break;
      case "PlayStation 3":
        setFilteredGamesList(
          gamesList.filter((game) => game.platform === filteredPlatform)
        );
        break;
      case "Macintosh":
        setFilteredGamesList(
          gamesList.filter((game) => game.platform === filteredPlatform)
        );
        break;
      case "PC":
        setFilteredGamesList(
          gamesList.filter((game) => game.platform === filteredPlatform)
        );
        break;
      case "iPhone":
        setFilteredGamesList(
          gamesList.filter((game) => game.platform === filteredPlatform)
        );
        break;
      case "Nintendo DS":
        setFilteredGamesList(
          gamesList.filter((game) => game.platform === filteredPlatform)
        );
        break;
      case "Nintendo 3DS":
        setFilteredGamesList(
          gamesList.filter((game) => game.platform === filteredPlatform)
        );
        break;
      case "Android":
        setFilteredGamesList(
          gamesList.filter((game) => game.platform === filteredPlatform)
        );
        break;
      default:
        setFilteredGamesList(gamesList);
        break;
    }
  };

  useEffect(() => {
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json"
    )
      .then((res) => res.json())
      .then((data) => setGamesList(data.slice(1)));
  }, []);

  useEffect(() => {
    // sets unique array of platforms dynamically
    setPlatforms(["all", ...new Set(gamesList.map((item) => item.platform))]);
    setFilteredGamesList(gamesList);
  }, [gamesList]);

  useEffect(() => {
    handleFilterPlatform();
    //eslint-disable-next-line
  }, [filteredPlatform]);

  return (
    <AppContext.Provider
      value={{
        inputText,
        setInputText,
        gamesList,
        setGamesList,
        filteredGamesList,
        setFilteredGamesList,
        platforms,
        setPlatforms,
        filteredPlatform,
        setFilteredPlatform,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
