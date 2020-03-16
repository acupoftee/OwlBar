import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useNewsSearch(pageNumber: number) {
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://api.overwatchleague.com/news',
      params: { page: pageNumber },
    }).then(res => {
      console.log(res.data)
    })
  }, [pageNumber])
  return null 
}
