import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../config/api";
import { Ten } from "./ten";
export const registerUser = createAsyncThunk(
    "registerUser",
    async (userData, { rejectWithValue, dispatch }) => {
        try {
            const res = await api.post('/register', userData);
            if (res.status != 200) return rejectWithValue();
            dispatch(Ten([, `Bienvenue, ${userData.name}, dans notre univers de lecture et de découvertes passionnantes ! `]))

            return { ...userData, id: res.data.id }
        } catch (error) {
            let errorData = error.response.data.message
            if (errorData == "The email has already been taken.") {
                dispatch(Ten([false, `M. ${userData.name}, cet e-mail existe déjà. Avez-vous déjà un compte ?`]))
                return rejectWithValue('duplicate email');
            } else {
                dispatch(Ten([false, 'Une erreur lors de la création du compte. Veuillez vérifier vos données']))
                return rejectWithValue();
            }
        }
    }
)
export const loginUser = createAsyncThunk(
    "loginUser",
    async (userData, { rejectWithValue, dispatch }) => {
        try {
            const res = await api.post('/login', userData);

            if (res.status != 200) return rejectWithValue();
            return res.data.user
        } catch (error) {
            return rejectWithValue();
        }
    }
)
const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoggedIn: false,
        isLoading: false,
        id: null,
        name: null,
        email: null
    },
    extraReducers: b => {
        b.addCase(registerUser.pending, s => { s.isLoading = true })
            .addCase(registerUser.fulfilled, (s, a) => {
                s.isLoggedIn = true;
                s.id = a.payload.id
                s.email = a.payload.email
                s.name = a.payload.name
                s.isLoading = false
            })
            .addCase(registerUser.rejected, (s, a) => {
                s.isLoggedIn = false;
                s.id = null
                s.email = null
                s.name = null
                s.isLoading = false
            })
            .addCase(loginUser.pending, s => { s.isLoading = true })
            .addCase(loginUser.fulfilled, (s, a) => {
                s.isLoggedIn = true;
                s.id = a.payload.id
                s.email = a.payload.email
                s.name = a.payload.name
                s.isLoading = false
            })
            .addCase(loginUser.rejected, (s, a) => {
                s.isLoggedIn = false;
                s.id = null
                s.email = null
                s.name = null
                s.isLoading = false
            })
    }
});

export default userSlice.reducer