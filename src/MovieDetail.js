import axios from "axios"
import { useLoaderData } from "react-router-dom"


const MovieDetail =()=>{
    const di = useLoaderData()

    let wd = window.screen.width

return (
    <div className="container pt-4">
    <div className="row">
        <div className={wd <= 758 ? "col-12" : "col-8"}>
            <h1>{di.Title}</h1>
            <p>{di.Plot}</p>
            <p>Director : {di.Director}</p>
            <p>Actors : {di.Actors}</p>
            <p>Writer : {di.Writer}</p>
            <p>IMDB : {di.imdbRating}</p>
        </div>
        <div className={wd <= 758 ? "col-12 p-4" : "col-4"}>
            <img src={di.Poster}/>
        </div>
    </div>
    </div>
)
}

export async function loader({params}){
const id = params.id

const data = await axios.get(`https://www.omdbapi.com/?apikey=abaeb6be&i=${id}&plot=full`)

return data.data

}

export default MovieDetail