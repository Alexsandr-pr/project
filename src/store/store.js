import { configureStore } from '@reduxjs/toolkit'
import fonSlice from './fonSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            fon: fonSlice
        }
    })
}
