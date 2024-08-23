import { createSlice, PayloadAction } from "@reduxjs/toolkit";




const initialState = {
    fon: false,
}


export const fonSlice = createSlice({
    name: "fon",
    initialState,
    reducers: {
        openFon: (state) => {
            state.fon = true;
        },
        closeFon: (state) => {
            state.fon = false;
        }
    }
})

export const { openFon, closeFon } = fonSlice.actions;
export default fonSlice.reducer;