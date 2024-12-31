import About from "./components/About"
import Banner from "./components/Banner"
import Faq from "./components/Faq"
import Htb from "./components/Htb" 
import LoadingScreen from "./components/LoadingScreen"
import Navbar from "./components/Navbar"
import Socials from "./components/Socials"
import Team from "./components/Team"
// import Tokenomic from "./components/Tokenomic"


function App() {

  return ( 
      <main className="w-screen overflow-hidden relative z-20">
        <LoadingScreen />
        <Navbar />
        <Banner /> 
        <About />
        <Htb />
{/*         <Tokenomic/> */}
        <Team />
        <Faq />
        <Socials/>
      </main>  
  )
}

export default App
