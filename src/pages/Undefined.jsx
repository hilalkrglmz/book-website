import React from 'react'
import { useLocation } from 'react-router-dom'

const Undefined = () => {


    /* lokasyonlar arası veri atıldığında kullanılır useLocation methodu */
const {state} = (useLocation())
console.log(state)
  return (
    <div>{state} Sayfa Bulunamadı :( </div>
  )
}

export default Undefined