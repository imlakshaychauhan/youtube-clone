import { createSlice } from "@reduxjs/toolkit";
import {MAX_LIVE_CHAT_COUNT} from "../utils/constants";

const chatSlice = createSlice({
    name: "chat",
    initialState:{
        liveMessages: []
    },
    reducers: {
        addMessages: (state, action) => {
            state.liveMessages.splice(MAX_LIVE_CHAT_COUNT, 1);
            state.liveMessages.unshift(action.payload);
        }
    }
})

export const {addMessages} = chatSlice.actions;

export default chatSlice.reducer;