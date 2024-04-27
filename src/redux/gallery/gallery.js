import { createSlice } from '@reduxjs/toolkit'
import { Api } from '../../api'

export const fetchDataGallery = () => {
    return async (dispatch) => {
        try {
            const response = await Api.get('/gallery/')
            console.log(response);
            dispatch(setGallery(response.data))
        } catch (error) {
            console.log(error)
        }
    }
}

const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        gallery: []
    },
    reducers: {
        setGallery: (state, action) => {
            state.gallery = action.payload
        }
    }
})

export default gallerySlice.reducer
export const { setGallery } = gallerySlice.actions
