import React, { useState } from 'react'
import { createContext } from 'react'
export const WishlistContext=createContext()
const WishlistProvider = ({children}) => {
    const [wish,setWish]=useState([])

    function addWish(product){
        const existWsih=wish.findIndex(x=>x._id===product._id)
        if(existWsih===-1){
            setWish([...wish,{...product}])
        }
    }

    function deleteWish(product){
        const deletedWish=wish.filter(x=>x._id!==product._id)
        setWish(deletedWish)
    }
    const data={
        wish,setWish,addWish,deleteWish
    }
  return (
    <>
    <WishlistContext.Provider value={data}>
        {children}
    </WishlistContext.Provider>
    </>
  )
}

export default WishlistProvider