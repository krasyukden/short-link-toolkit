import { createSlice } from "@reduxjs/toolkit"

export interface IStateLinks {
  links: Array<ILinks>
}
export interface ILinks {
  id: string,
  link: string,
  copied: boolean
}

const initialState = {
  links: []
}

const linkSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    sendLinksRequest(state: IStateLinks, action: any) {
      state.links
    },
    getLinksSuccess(state: IStateLinks, action: any) {
      state.links.push({
        id: new Date().toISOString(),
        link: action.payload,/* .inputValue */
        copied: false
      })
    },
    toggleCopyComplete(state: IStateLinks, action: any) {
      const toggledCopy = state.links.find(link => link.id === action.payload);
      if (toggledCopy) toggledCopy.copied = !toggledCopy.copied;
    }
  }
})

export const { sendLinksRequest, getLinksSuccess, toggleCopyComplete } = linkSlice.actions;

export default linkSlice.reducer;