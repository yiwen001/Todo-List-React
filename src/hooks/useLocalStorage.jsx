import { useEffect } from "react"
import { useState } from "react"

const useLocalStorage=(key,initalValue)=>{
    const [value,setValue]=useState(()=>{
       try{
        const localValue=window.localStorage.getItem(key);
        return localValue? JSON.parse(localValue):initalValue;
       }catch(err){
        console.log(err)
        return initalValue
       }
    })

    useEffect(()=>{
        window.localStorage.setItem(key,JSON.stringify(value))
    },[key,value])

    return [value,setValue]
}

export default useLocalStorage

