import axios from "@/library/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";


const bookSlice = createSlice({
    name: "bookSlice",
    initialState: {
        source: [],
        detail: null,
    },
    reducers: {
        setSource(state, { payload }) {
            state.source = payload
        },
        setDetail(state, { payload }) {
            state.detail = payload
        },
        resetDetail(state) {
            state.detail = null
        }
    }
})


// export const updateBook = (payload: any) => async (dispatch: AppDispatch, getState: RootState) => {

//     const detail: any = getState.books.detail
//     await axios.put(`/book/${detail.id}`, payload).then(({ data }) => {
//         dispatch(getBook())
//     }).catch(({ response }) => {
//         console.log(response?.data)
//     })
// }

export const updateBook = createAsyncThunk<any, number, { state: RootState, dispatch: AppDispatch }>('books/updateBook', async (payload, { dispatch, getState }) => {
    const detail: any = getState().books.detail;
    await axios.put(`/book/${detail?.id}`, payload).then(({ data }) => {
        dispatch(getBook());
    }).catch(({ response }) => {
        console.log(response?.data)
    })
});

export const deleteBook = createAsyncThunk<any, never , { state: RootState, dispatch: AppDispatch }>('books/deleteBook', async (_, { dispatch, getState }) => {
    const detail: any = getState().books.detail;
    await axios.delete(`/book/${detail?.id}`).then(({ data }) => {
        dispatch(getBook());
    }).catch(({ response }) => {
        console.log(response?.data)
    })
});


export const addBook = createAsyncThunk<any, any, {dispatch: AppDispatch }>('books/deleteBook', async (payload, { dispatch }) => {
    await axios.post(`/books`, payload).then(({ data }) => {
        dispatch(getBook())
    }).catch(({ response }) => {
        console.log(response?.data)
    })
});

export const getBook = () => async (dispatch: AppDispatch) => {
    await axios.get("/books").then(({ data }) => {
        dispatch(setSource(data.data))
    }).catch(({ response }) => {
        console.log(response?.data)
    })
}

export const { setSource, setDetail, resetDetail } = bookSlice.actions
export default bookSlice.reducer