import { createSlice } from '@reduxjs/toolkit'
export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    value: [],
  },
  reducers: {
    get:(state,{payload}) => {
    
     state.value = payload
  },
}})

// Action creators are generated for each case reducer function
export const { get } = dataSlice.actions

export default dataSlice.reducer