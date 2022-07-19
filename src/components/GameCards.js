import { useGlobalContext } from "../context";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

const GameCards = () => {
  const { filteredGamesList } = useGlobalContext();
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <div className="game-container">
      <motion.div
        animate={{ x: [-1400, 0], opacity: 1 }}
        transition={{
          delay: 1,
          x: { type: "spring", stiffness: 100 },
          default: { duration: 2 },
        }}
        className="gamecards-title-container"
      >
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeIn", duration: 1, delay: 2 }}
        >
          List of Games
        </motion.h2>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ ease: "easeIn", duration: 1, delay: 2 }}
        className="gamecard-container"
      >
        {filteredGamesList?.map((game, index) => {
          const { title, platform, score, genre, editors_choice } = game;
          return (
            <Card sx={{ minWidth: 275 }} key={index} className="gamecard">
              <CardContent>
                <Typography variant="h6" component="div">
                  {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {platform}
                </Typography>
                <Typography variant="body2">
                  {`Score: ${score}/10`}
                  <br />
                  {genre}
                  <br />
                  {editors_choice === "Y"
                    ? "Editors's Choice: Yes"
                    : "Editors's Choice: No"}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </motion.div>
    </div>
  );
};

export default GameCards;
