import Movie from "./Movie"
import { useDispatch, useSelector, } from "react-redux"
import { get } from "./dataSlice"
import { useEffect, useRef, useState } from "react"
import axios from 'axios'
import { useLoaderData } from "react-router-dom"

const Home = ()=>{
    const data = useSelector((state)=>state.data.value)
    const dispatch = useDispatch() 
    let st = useLoaderData() || "harry"
    const check = useRef(false)

    useEffect( ()=>{
    check.current=false
    dispatch(get([]))
        axios.get(`https://www.omdbapi.com/?apikey=abaeb6be&s=${st}`).then((data)=>{
            check.current=true
                dispatch(get(data.data.Search))
            
        })
        
    },[st])

    if(!check.current){
        return (
            <div style={{marginTop:"35vh",textAlign:"center"}}>

                <div className="ld ld-ring ld-spin"
     style={{fontSize:"64px"}}>
</div>
                <h1>Loading...</h1>
            </div>
        )
    }else{

        return (
            <div className="mDiv">
            {data? data.map((d)=>{
                return <Movie info={d}/>
            }):"No Result Found"}

        </div>
        
        )

    }
}
export default Home