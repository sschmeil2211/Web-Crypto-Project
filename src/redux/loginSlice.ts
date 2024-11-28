import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface LoginState{
    email: string;
    password: string;
    message: string;
}

const initialState: LoginState = {
    email:'',
    password: '',
    message: '',
};

const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        setEmail: (state, action: PayloadAction<string>) =>{
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) =>{
            state.password = action.payload;
        },
        setMessage: (state, action: PayloadAction<string>) =>{
            state.message = action.payload;
        },
        clearFields: (state) =>{
            state.email = '';
            state.password = '';
        },
    }
});

export const { setEmail, setPassword, setMessage, clearFields } = loginSlice.actions;
export default loginSlice.reducer;