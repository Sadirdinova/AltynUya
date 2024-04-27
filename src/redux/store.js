import { configureStore } from '@reduxjs/toolkit'
import newsSlice from './news/newsSlice'
import gallerySlice from './gallery/gallery'
import vacancySlice from './vacancy/vacancySlice'

const store = configureStore({
    reducer: {
        newsSlice,
        gallerySlice,
        vacancySlice,
    }
})

export default store