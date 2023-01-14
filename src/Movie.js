import { Link } from "react-router-dom"

const Movie = (props)=>{
    return (
      <Link className="link" to={`/movie/${props.info.imdbID}`}> 
      <div className="card" style={{width:"18rem"}}>
  <img src={props.info.Poster} className="card-img-top ht" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.info.Title}</h5>
    <p className="card-text">{props.info.Year}</p>
  </div>
</div>
          </Link>
    )
}
export default Movie