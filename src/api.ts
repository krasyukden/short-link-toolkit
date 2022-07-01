import React from 'react'
import axios, { AxiosResponse } from "axios";
import { ILinks } from './redux/linkSlice';




export const postLink = (url: string): Promise<Array<ILinks>> => {
  return axios.post(
    `https://api.shrtco.de/v2/shorten?url=${url}`
    ).then((response: AxiosResponse) => {
      console.log(response.data)
      console.log(response.data.result.full_short_link)
      return response.data.result.full_short_link
    })
    .catch((error: Error | null) => {
      console.log(error);
    })
  
}
/* export const getLink = () => {
  return axios.get(`https://api.shrtco.de/v2/info?code=`)
} */
