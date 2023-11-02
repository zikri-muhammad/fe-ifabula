import axios from "@/library/axios";
import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { UserInitial } from "@/types/user.interface";


const todoSlice = createSlice({
    name: "todoSlice",
    initialState: {
        source: [],
    },
    reducers: {
        setSource(state, { payload }) {
            state.source = payload
        },
    }
})


export const getTodos = () => async (dispatch: AppDispatch) => {

    await axios.get("/todos").then(({ data }) => {
        dispatch(setSource(data.content.entries))
        console.log(data.content.entries)
    }).catch(({ response }) => {
        console.log(response.data.message)
    })
}

export const { setSource } = todoSlice.actions
export default todoSlice.reducer