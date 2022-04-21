import { configureStore } from "@reduxjs/toolkit";
import campaignSlice from "./slices/campaignSlice.js";

export const store = configureStore({ reducer: { campaign: campaignSlice } });
