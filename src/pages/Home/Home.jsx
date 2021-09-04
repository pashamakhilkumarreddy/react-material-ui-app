import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MenuItem, TextField, Grid, withStyles } from "@material-ui/core";
import config from "../../config";
import { GET_WORDS } from "../../store/constants";
import Definitions from "../../components/Definitions/Definitions";

const Home = ({ classes }) => {
  const [language, setLanguage] = useState(config.languages[0].label);
  const state = useSelector((state) => state.words);
  const dispatch = useDispatch();

  const updateWord = useCallback(() => {
    dispatch({
      type: GET_WORDS,
      payload: { lang: language, word },
    });
  }, [dispatch]);
  console.log(state);
  const [word, setWord] = useState("");

  const handleOnChange = (e) => {
    setLanguage(e.target.value);
    setWord("");
  };

  useEffect(() => {
    updateWord();
  }, [word, language]);
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      className={classes.root}
    >
      <Grid item xs={12} sm={6} className="flex-center">
        <TextField
          className="search"
          label="Search a word"
          id="standard-basic"
          label="Standard"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6} className="flex-center">
        <TextField
          id="standard-select-currency"
          select
          label="Language"
          value={language}
          onChange={handleOnChange}
          helperText="Please select a language"
        >
          {config.languages.map((language) => (
            <MenuItem key={language.label} value={language.label}>
              {language.value}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid>
        <Definitions />
      </Grid>
    </Grid>
  );
};

const styles = {
  root: {
    margin: "3rem 0 0",
  },
};

export default withStyles(styles)(Home);
