import DictionaryService from "../../services/Dictionary";
import { GET_WORDS } from "../constants";

export const getWords =
  ({ lang, word }) =>
  async (dispatch) => {
    try {
      const result = await DictionaryService.getWords({ lang, word });
      console.info(result);
      dispatch({
        type: GET_WORDS,
        payload: result,
      });
    } catch (err) {
      console.error(err);
    }
  };
