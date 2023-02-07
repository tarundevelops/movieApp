import Movie from "./Movie"
import { useDispatch, useSelector, } from "react-redux"
import { getApi } from "./dataSlice"
import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"

const Home = ()=>{
    const data = useSelector((state)=>state.data)
    const dispatch = useDispatch() 
    let st = useLoaderData() || "harry"

    useEffect( ()=>{
    
    dispatch(getApi(st))
  
        
        
    },[st])

    if(data.loading){
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
            {!data.error ? data.value.map((d)=>{
                return <Movie info={d}/>
            }):data.error}

        </div>
        
        )

    }
}
export default Home