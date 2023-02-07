import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const getApi=createAsyncThunk("data/getData",async (st)=>{

  const rdata = await axios.get(`https://www.omdbapi.com/?apikey=abaeb6be&s=${st}`)

  return rdata

})
export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    value: [],
    loading:true,
    error:""
  },
  reducers: {
    get:(state,{payload}) => {
    
     state.value = payload
  },
},
extraReducers:(builder)=>{
  
  
  builder.addCase(
    getApi.pending,(state)=>{
      state.loading = true;
      state.value=[]
      state.error=""
      console.log("Pending")
    }

  )
  builder.addCase(
    getApi.fulfilled,(state,action)=>{
      state.loading = false
      if(action.payload.data.Response == "True"){
console.log(action.payload)
        state.value = action.payload.data.Search
      }else{
        state.error = "No result found"
      }
    }

  )
  builder.addCase(
    getApi.rejected,(state)=>{
      state.loading=false
      state.error= "Error Occured"
    }

  )
}

})

export const { get} = dataSlice.actions

export default dataSlice.reducer