import './App.css';
import HeaderComponent from "./components/header.jsx";
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';

const AppStructure = () =>{
    return(
      <>
        <HeaderComponent/>
        <Outlet/>
        <Footer/>
      </>
    )
}


export default AppStructure
