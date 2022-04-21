import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    createCampaign: (state, action) => {
      state.push(action.payload);
    },
    editCampaign: (state, action) => {
      const { id } = action.payload;
      state.map((card) => (card.id === id ? { ...action.payload } : card));
    },
    suspendCampaign: (state, action) => {
      console.log(action.payload);
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { createCampaign, editCampaign, suspendCampaign } =
  campaignSlice.actions;

// Selectors
export const selectCards = (state) => state.campaign;

export default campaignSlice.reducer;
