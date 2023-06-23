import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { loginServices, registerServices } from "../../services/request";
import { removeToken, setToken } from "../../services/storage";

export const registerThunk = createAsyncThunk("user/register", async (data, thunkAPI) => {
    try {
        const response = await registerServices(data);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const loginThunk = createAsyncThunk("user/login", async (data, thunkAPI) => {
    try {
        const response = await loginServices(data);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isFetching: false,
        error: false,
        errorMessage: null
    },
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        },
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
        },
        logout: (state) => {
            state.user = null;
            removeToken();
        }
    },
    extraReducers(builder) {
        builder.addCase(registerThunk.pending, (state) => {
            state.isFetching = true;
        });
        builder.addCase(registerThunk.fulfilled, (state, action) => {
            state.isFetching = false;
            state.user = action.payload;
        });
        builder.addCase(registerThunk.rejected, (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.errorMessage = action.payload.message;
        });
        builder.addCase(loginThunk.pending, (state) => {
            state.isFetching = true;
        });
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.isFetching = false;
            state.user = action.payload;
            setToken(action.payload.token);
        });
        builder.addCase(loginThunk.rejected, (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.errorMessage = action.payload.message;
        });
    }
});

export const { setError, setErrorMessage, logout } = userSlice.actions;
export default userSlice.reducer;