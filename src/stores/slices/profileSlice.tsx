import axios from "@/library/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";


const profileSlice = createSlice({
    name: "profileSlice",
    initialState: {
        source: [],
        detail: null,
    },
    reducers: {
        setSource(state, { payload }) {
            state.source = payload
        },
    }
})

export const getProfiles = () => async (dispatch: AppDispatch) => {
    await axios.get("/users").then(({ data }) => {
        dispatch(setSource(data.data))
    }).catch(({ response }) => {
        console.log(response?.data)
    })
}

export const { setSource } = profileSlice.actions
export default profileSlice.reducer