import { createSlice } from "@reduxjs/toolkit";

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    entities: {},
    ids: [],
    status: "notStarted",
  },
  reducers: {
    startLoading: (state) => {
      state.entities = {};
      state.ids = [];
      state.status = "startLoading";
    },

    failLoading: (state) => {
      state.entities = {};
      state.ids = [];
      state.status = "failLoading";
    },

    successLoading: (state, { payload }) => {
      state.entities = (payload || []).reduce((acc, character) => {
        acc[character.id] = character;
        return acc;
      }, {});

      state.ids = (payload || []).map(({ id }) => id);

      state.status = "success";
    },
  },
});

export const { startLoading, failLoading, successLoading } =
  charactersSlice.actions;

export default charactersSlice;
