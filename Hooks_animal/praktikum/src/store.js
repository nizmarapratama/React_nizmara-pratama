import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import { userReducer } from "react";
import storage  from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    storage
};

const rootReducer = combineReducers = combineReducers({
    counter: counterReducer,
    user: userReducer
});

const persistReducer = persistReducer(persistConfig, rootReducer);
    

export const store = configureStore({
    reducer: persistReducer
});

export const persistor = persistStore(store);


// export default { configureStore } ({
//     reducer: {
//         counter: counterReducer,
//         user: userReducer
//     }
// })