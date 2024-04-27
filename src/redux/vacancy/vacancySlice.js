import { createSlice } from '@reduxjs/toolkit'
import { Api } from '../../api'

const vacancySlice = createSlice({
    name: 'vacancy',
    initialState: {
        vacancies: []
    },
    reducers: {
        setVacancies: (state, action) => {
            state.vacancies = action.payload
        }
    }
})

export default vacancySlice.reducer
export const { setVacancies } = vacancySlice.actions

export const getDataVacancies = () => {
    return async (dispatch) => {
        try {
            const response = await Api.get('/vacancies/')
            dispatch(setVacancies(response.data))
        } catch (error) {
            console.log(error);
        }
    }
}