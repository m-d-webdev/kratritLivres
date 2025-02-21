import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './slices/user'
import Tenreducer from './slices/ten'
const store = configureStore({
    reducer: {

        user: UserReducer,
        ten: Tenreducer,

    }
})


export default store;
