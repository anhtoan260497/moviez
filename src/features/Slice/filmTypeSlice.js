import {createSlice} from '@reduxjs/toolkit'

const filmTypeSlice = createSlice({
    name : 'filmType',
    initialState : '',
    reducers : {
        changeFilmType (state,action) {
            if(action.payload === 'tv') return action.payload 
            if(action.payload === 'mo') return 'movie'
        }
    }
})

const {actions,reducer} = filmTypeSlice
export const {changeFilmType} =  actions
export default reducer