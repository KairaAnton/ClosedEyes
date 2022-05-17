import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import './index.scss';


const Layout :React.FC = () => {
    return (
        <div className="layout">
         <Header/>
         
         <Outlet/>   
        </div>
    );
}
 
 
export default Layout;