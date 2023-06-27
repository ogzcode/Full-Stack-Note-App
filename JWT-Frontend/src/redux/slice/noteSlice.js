import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllNotesServices, addNoteServices, deleteNoteServices, updateNoteServices } from "../../services/request";

export const getAllNoteThunk = createAsyncThunk("note/getAll", async (data, thunkAPI) => {
    try {
        const response = await getAllNotesServices(data);
        return response.data.notes;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const addNoteThunk = createAsyncThunk("note/add", async (data, thunkAPI) => {
    try {
        const response = await addNoteServices(data);
        return response.data.note;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const deleteNoteThunk = createAsyncThunk("note/delete", async (id, thunkAPI) => {
    try {
        const response = await deleteNoteServices(id);
        return id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const updateNoteThunk = createAsyncThunk("note/update", async (data, thunkAPI) => {
    try {
        const response = await updateNoteServices(data);
        return response.data.note;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const noteSlice = createSlice({
    name: 'note',
    initialState: {
        notes: [],
        isFetching: false,
        error: false,
        errorMessage: null,
        selectedNote: {}
    },
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        },
        setSelectedNote: (state, action) => {
            state.selectedNote = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(getAllNoteThunk.pending, (state) => {
            state.isFetching = true;
        });
        builder.addCase(getAllNoteThunk.fulfilled, (state, action) => {
            state.isFetching = false;
            state.notes = action.payload;
        });
        builder.addCase(getAllNoteThunk.rejected, (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.errorMessage = action.payload.message;
        });
        builder.addCase(addNoteThunk.pending, (state) => {
            state.isFetching = true;
        });
        builder.addCase(addNoteThunk.fulfilled, (state, action) => {
            state.isFetching = false;
            state.notes.push(action.payload);
        });
        builder.addCase(addNoteThunk.rejected, (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.errorMessage = action.payload.message;
        });
        builder.addCase(deleteNoteThunk.pending, (state) => {
            state.isFetching = true;
        });
        builder.addCase(deleteNoteThunk.fulfilled, (state, action) => {
            state.isFetching = false;
            state.notes = state.notes.filter(note => note.id !== action.payload);
        });
        builder.addCase(deleteNoteThunk.rejected, (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.errorMessage = action.payload.message;
        });
        builder.addCase(updateNoteThunk.pending, (state) => {
            state.isFetching = true;
        });
        builder.addCase(updateNoteThunk.fulfilled, (state, action) => {
            state.isFetching = false;
            const index = state.notes.findIndex(note => note.id === action.payload.id);
            state.notes[index] = action.payload;
        });
        builder.addCase(updateNoteThunk.rejected, (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.errorMessage = action.payload.message;
        });
    }
});

export const { setError, setSelectedNote } = noteSlice.actions;
export default noteSlice.reducer;
