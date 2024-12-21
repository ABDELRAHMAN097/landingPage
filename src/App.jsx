import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar className='bg-transparent'/>
      <Hero/>
    </div>
  )
}