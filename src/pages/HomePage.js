import SearchForm from "../components/SearchForm";
import SortingAndFiltering from "../components/SortingAndFiltering";
import GameCards from "../components/GameCards";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="home-container">
      <motion.div
        animate={{ y: [-100, 0] }}
        transition={{ ease: "backOut", duration: 2 }}
      >
        <Header />
      </motion.div>
      <SearchForm />
      <SortingAndFiltering />
      <GameCards />
      <Footer />
    </div>
  );
};

export default HomePage;
