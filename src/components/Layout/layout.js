import Navbar from '../Navbar/navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/footer'


const Layout = () => {
    return (
    <div className="App">
     <Navbar/> 
        <div className='page'>
            <span className='tags top-tags'> </span>

            <Outlet />

            <span className='tags bottom-tags'>
            
            
            <span className='bottom-tag-html'><Footer /></span>
            </span>
        </div>
        
     </div>
    )
}

export default Layout