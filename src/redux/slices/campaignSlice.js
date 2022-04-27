import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCampaign } from "../../api";

// Thunk Actions

export const create = createAsyncThunk("campaign/create", async (campaign) => {
  const response = await createCampaign(campaign);
  console.log("api response >>>", response);
  return {...campaign, redisId: response.data};
});

// Slice

const initialState = [];

export const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    // createCampaign: (state, action) => {
    //   state.push(action.payload);
    // },
    editCampaign: (state, action) => {
      const { id } = action.payload;
      state.map((card) => (card.id === id ? { ...action.payload } : card));
    },
    suspendCampaign: (state, action) => {
      console.log(action.payload);
      return state.filter(({ id }) => id !== action.payload);
    },
  },
  
  extraReducers: {
    [create.fulfilled]: (state, action) => {
      console.log("action >>>>", action);
      state.push(action.payload);
    },
  },
});

// Selectors
export const selectCards = (state) => state.campaign;

// Exports

export const { editCampaign, suspendCampaign } = campaignSlice.actions;

export default campaignSlice.reducer;
