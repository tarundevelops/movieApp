import Movie from "./Movie"
import { useDispatch, useSelector, } from "react-redux"
import { get } from "./dataSlice"
import { useEffect, useState } from "react"
import axios from 'axios'
import { useLoaderData } from "react-router-dom"

const Home = ()=>{
    const data = useSelector((state)=>state.data.value)
    const dispatch = useDispatch() 
    let st = useLoaderData() || "harry"
    const [check,setCheck] = useState(false)
    
    useEffect( ()=>{
    
        axios.get(`https://www.omdbapi.com/?apikey=abaeb6be&s=${st}`).then((data)=>{
            dispatch(get(data.data.Search))
            if(data.data.Response == 'False') setCheck(true)
        })
        
    },[st])
    return (
        <div className="mDiv">
            {data? data.map((d)=>{
               return <Movie info={d}/>
            }): check ? "No Result Found":"Loading..."}
        </div>
        
        )
}
export default Home