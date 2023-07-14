import Navbar from "./Navbar";
import Footer from "./Footer";
// import{ Navigate} from 'react-router-dom';
const DashboardPage = () => {
    const username = localStorage.getItem('username');
  
    return (
      <div>
        
        <h2>Welcome, {username}!</h2>
        
      </div>
    );
  };
export default DashboardPage;  