import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts =  createAsyncThunk("productsSlice/fetchProducts", async () =>{
   const api_url= "https://fakestoreapi.com/products"  
    const res = await fetch(api_url);
  const data = await res.json();
  return data
})
const productsSlice = createSlice(
    {
        initialState: [],
        name: "productsSlice",
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(fetchProducts.fulfilled, (state, action) =>{
                return action.payload;
                })
            }
        })
        
    
    
export const {} = productsSlice.actions;
export default productsSlice.reducer;
