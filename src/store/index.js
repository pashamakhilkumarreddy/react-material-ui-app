import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import config from "../config";

const { ENV } = config;

const middleware = [thunk];

const persistConfig = {
  key: "root",
  storage,
  // blacklist: [],
  // whitelist: [],
};

if (ENV !== "production") {
  const logger = createLogger();
  middleware.push(logger);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnchaner =
  ENV !== "production"
    ? composeWithDevTools(applyMiddleware(...middleware))
    : compose(applyMiddleware(...middleware));

const store = createStore(persistedReducer, composeEnchaner);

const persistor = persistStore(store);

export { store, persistor };
