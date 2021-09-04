import { GET_WORDS } from "../constants";

const initialState = {
  words: [],
};

export default function wordsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WORDS: {
      return state;
    }

    default:
      return state;
  }
}
