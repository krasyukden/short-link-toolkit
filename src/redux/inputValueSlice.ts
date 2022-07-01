import { createSlice } from "@reduxjs/toolkit"

export interface IStateInputValue {
  inputValues: Array<InputValue>
}
export interface InputValue {
  id: string,
  inputValue: string
}

const initialState = {
  inputValues: []
}

const inputValueSlice = createSlice({
  name: 'inputValues',
  initialState,
  reducers: {
    addInputValue(state: IStateInputValue, action: any) {
      state.inputValues.push({
        id: new Date().toISOString(),
        inputValue: action.payload
    })
    }    
  }
})

export const { addInputValue } = inputValueSlice.actions;

export default inputValueSlice.reducer;