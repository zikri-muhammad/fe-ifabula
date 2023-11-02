import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import userSlice from "./slices/userSlice";
import sidebarSlice from "./slices/sidebarSlice";
import earningSlice from "./slices/earningSlice";
import bookSlice from "./slices/bookSlice";
import borrowingSlice from "./slices/borrowingSlice";
import profileSlice from "./slices/profileSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        sidebar: sidebarSlice,
        earning: earningSlice,
        books: bookSlice,
        borrowings: borrowingSlice,
        profile: profileSlice
    },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;