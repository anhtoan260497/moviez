import { configureStore } from "@reduxjs/toolkit";
import filmTypeReducer from '../features/Slice/filmTypeSlice'
import searchReducer from '../features/Slice/searchSlice'

const rootReducer = {
  filmType : filmTypeReducer,
  search : searchReducer
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
