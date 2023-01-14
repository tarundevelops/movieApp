import {Outlet,Link, useNavigate} from 'react-router-dom'
const Header = ()=>{
    let ip=""
    let navigate = useNavigate()

    let onSubmitForm = (e)=>{
        e.preventDefault()
        if(ip) navigate(`/search/${ip}`)
        e.target[0].value=""
    }
    return (
        <>
        <nav >
            <div className="d-flex justify-content-between flex-wrap p-4 bg-dark" >
                <Link className="text-decoration-none" to="/">MovieApp</Link>
                <form onSubmit={onSubmitForm} class="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{ip=e.target.value}}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
            
            </div>
        </nav>
        <main style={{minHeight:"85vh"}} >
            <Outlet/>
        </main>
        <footer>
            <div>
                <p className="m-0 p-4 text-bg-dark text-center">MovieApp</p>
            </div>
        </footer>
        </>
    )
}

export default Header