// Click event = An interaction a user clicks on a specific element. 
//               We can respond to clicks by passing
//               a callback to the onclick event handler.

import Button from './Button.jsx' 
import Button2 from './Button2.jsx'
import EventButton from './EventButton.jsx'

function App() {
  
  return (
     <div> 
    <Button />
    <Button2 />
    <EventButton />
    </div>
  )
}

export default App
