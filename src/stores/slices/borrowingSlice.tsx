import axios from "@/library/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { ToastContainer, toast } from 'react-toastify';


const borrowingSlice = createSlice({
    name: "borrowingSlice",
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

export const updateBorriwing = createAsyncThunk<any, number, { state: RootState, dispatch: AppDispatch }>('borrowings/updateBorrowing', async (payload, { dispatch, getState }) => {
    const detail: any = getState().borrowings.detail;
    await axios.put(`/borrowing/${detail?.id}`, payload).then(({ data }) => {
        dispatch(getBorrowings());
    }).catch(({ response }) => {
        alert(response.data.errMessage)
        console.log(response?.data)
    })
});

export const deleteBorriwing = createAsyncThunk<any, never , { state: RootState, dispatch: AppDispatch }>('borrowings/deleteBook', async (_, { dispatch, getState }) => {
    const detail: any = getState().borrowings.detail;
    await axios.delete(`/borrowing/${detail?.id}`).then(({ data }) => {
        dispatch(getBorrowings());
    }).catch(({ response }) => {
        console.log(response?.data)
    })
});


export const addBorrowing = createAsyncThunk<any, any, {dispatch: AppDispatch }>('books/deleteBook', async (payload, { dispatch }) => {
    await axios.post(`/borrowings`, payload).then(({ data }) => {
      
        dispatch(getBorrowings())
        toast.success('success')
    }).catch(({ response }) => {
        toast.error(response.data.errMessage)
        // alert(response?.data.errMessage);
        console.log(response?.data)
    })
});


export const getBorrowingsUser = () => async (dispatch: AppDispatch) => {
    await axios.get("/borrowing-users").then(({ data }) => {
        dispatch(setSource(data.data))
    }).catch(({ response }) => {
        console.log(response?.data)
    })
}

export const getBorrowings = () => async (dispatch: AppDispatch) => {
    await axios.get("/borrowings").then(({ data }) => {
        dispatch(setSource(data.data))
    }).catch(({ response }) => {
        console.log(response?.data)
    })
}

export const { setSource, setDetail, resetDetail } = borrowingSlice.actions
export default borrowingSlice.reducer