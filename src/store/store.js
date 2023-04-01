import { configureStore } from '@reduxjs/toolkit';
import viewTypeReducer from './viewTypeReducer';
import newsReducer from './newsReducer';
import mobileMenuReducer from "./mobileMenuReducer";

export default configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer,
    viewType: viewTypeReducer,
    news: newsReducer
  }
})