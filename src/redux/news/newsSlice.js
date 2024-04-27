import { createSlice } from '@reduxjs/toolkit'
import { Api } from '../../api'


const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: []
    },
    reducers: {
        setNews: (state, action) => {
            state.news = action.payload
        },
        setNewsAll: (state, action) => {
            state.news = action.payload
        }
    }

})


export default newsSlice.reducer
export const { setNews, setNewsAll } = newsSlice.actions



export const fetchDataNews = () => {
    return async (dispatch) => {
        try {
            const response = await Api.get('/')
            dispatch(setNews(response.data))
        } catch (error) {
            console.log(error);
        }
    }
}

export const fetchDataNew = () => {
    return async (dispatch) => {
        try {
            const response = await Api.get('/news/')
            dispatch(setNews(response.data))
        } catch (error) {
            console.log(error);
        }
    }
}