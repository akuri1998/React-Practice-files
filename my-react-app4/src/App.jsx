// conditional rendering = Allows you to control what gets rendered 
//                         in your appilication based certain conditions
//                         (show, hide or change components)

import UserGreeting from "./UserGreeting.jsx"

function App() {
  

  return (
    <>
      <UserGreeting isLoggedIn = {true} username = "BroCode" />
    </>
  );
}

export default App;
