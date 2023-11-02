import axios from "@/library/axios";
import { CredentialsInterface } from "@/types/credential.interface";
import { User, UserInitial } from "@/types/user.interface";
import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { toast } from "react-toastify";


const userSlice = createSlice({
    name: "User",
    initialState: UserInitial,
    reducers: {
        setUser(state, { payload }) {
            state.name = payload.name
            state.role = payload.role
            state.__v = payload.__v
            state.createdAt = payload.createdAt
            state._id = payload._id
            state.email = payload.email
            state.id = payload.id
        }
    }
})

export const registerUser = (payload: CredentialsInterface) => {
    return new Promise(async (resolve, reject) => {
        await axios.post("/register", payload).then(({ data }) => {
            resolve(data)
            toast.success('success login')
        }).catch(({ response }) => {
            toast.error(response.data.message)
            reject(response.data.message)
        })
    })
}
export const loginUser = (payload: CredentialsInterface) => {
    return new Promise(async (resolve, reject) => {
        await axios.post("/login", payload).then(({ data }) => {
            resolve(data)
            toast.success('success login')
          
        }).catch(({ response }) => {
            toast.error(response.data.message)
            reject(response.data.message)
        })
    })
}

export const getUser = (token: any) => {

    return new Promise(async (resolve, reject) => {
        await axios.get("/me", {
            headers: {
                Authorization: 'Bearer ' + token //the token is a variable which holds the token
            }
        }).then(({ data, config }) => {
            resolve(data)
            console.log(config)
            console.log(data)
        }).catch(({ response }) => {
            reject(response)
            console.log(response)
        })
    })
}


export const { setUser } = userSlice.actions
export default userSlice.reducer