import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Component/profil/Profile';

import Footer from './Component/profil/Footer';
import NavBar from './Component/profil/NavBar';
import FullName from './Component/profil/FullName';

function App() {
 const handleName=(name)=>{alert(name)}
  var prof = {
     fullName :"Aloui Mariem",
     bio : "I am a software engineer with robust problem-solving skills and developing web applications",
     profession: "SOFTWARE ENGINEER"
  }
  return (
   <div className='App'>
    <NavBar/>
    <FullName />
     <Profile fullName={prof.fullName} bio={prof.bio} profession={prof.profession} handleName={handleName} >
      <div>
        
        
      
         </div>
     </Profile>
     <Footer/>
   </div>
  );
} 


export default App;