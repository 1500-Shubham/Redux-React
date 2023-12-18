
import './App.css';
import { Footer, Footerooter } from './components/Footer/footer';
import { Header } from './components/Header/header';
import LadingPage from './screens/LandingPage/LadingPage';

const App = () =>{
return (
    <div>
     <Header/>
     <main style={{minHeight:"93vh"}}>
      <LadingPage/>
     </main>
     <Footer/>
    </div>
  );
} 
   


export default App;
