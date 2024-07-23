import './App.css';
import HeaderComponent from "./components/header.jsx";
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utilis/store.jsx';

const AppStructure = () =>{
    return(
      <>
      <Provider store={store}>
        <HeaderComponent/>
        <Outlet/>
        <Footer/>
      </Provider>
      </>
    )
}


export default AppStructure
