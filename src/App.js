
import './App.css';
import Header from './Header';
import Home from './Home'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import MovieDetail, { loader } from './MovieDetail';
import Error from './Error';
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Header/>} errorElement={<Error/>}>
    <Route index element={<Home/>}/>
    <Route path="/search/:st" element={<Home/>} loader={({params})=>{return params.st}}/>
    <Route path="/movie/:id" element={<MovieDetail/>} loader={loader}/>
  </Route>
))

function App() {
  return (
<RouterProvider router={router}/>
  );
}

export default App;
