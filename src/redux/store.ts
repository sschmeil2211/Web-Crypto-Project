import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../redux/loginSlice';
import authReducer from '../redux/authSlice';

export const store = configureStore({
    reducer: {
        login: loginReducer,
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;