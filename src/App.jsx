import { useEffect,useState } from 'react'
import Loading from './loading'
import Tours from './tours'
const url ="https://course-api.com/react-tours-project"
function App() {
  const [isLoading,setIsLoading] = useState(true)
  const [tours,setTours] = useState([])
  const removeTour = (id) =>{
    const newTours = tours.filter((tour) =>tour.id !==id)
     setTours(newTours)
  }
  const fetchTours = async ()=>{
setIsLoading(true)
try {
  const response = await fetch(url)
  const tours = await response.json()
  setTours(tours)
} catch (error) {
  console.log(error)
}
setIsLoading(false)
  }
useEffect(()=>{
  fetchTours()
},[])
if(isLoading){
  return (
    <main>
      <Loading/>
    </main>
  )
}
//to do
  return (
   <main>
    <Tours removeTour={removeTour}tours={tours} />
   </main>
  )
}

export default App
