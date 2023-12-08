import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";
import orderReducer from "./reducers/order.js";

const authPersistConfig = { key: "auth", storage };
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  order: orderReducer,
});

const rootPersistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["persist/PERSIST"],
  // Thêm reducer mới vào danh sách được lưu trữ nếu bạn muốn lưu trữ nó
  whitelist: ["auth", "order"], // điều chỉnh tùy thuộc
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);


const syncConfig = {
  blacklist: ["persist/PERSIST"],
  whitelist: ["auth", "order"], // điều chỉnh tùy thuộc
};


const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, createStateSyncMiddleware(syncConfig)],
});

initMessageListener(store);

export default store;

export const persistor  = persistStore(store);
