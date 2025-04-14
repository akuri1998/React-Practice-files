// props = read only properties that are shared between components.
//         A parent component can send data to a child component.
//         <component key = value />


import Student from './Student.jsx'
function App() {
  
  return (
    <>
      <Student name = 'Spangebob' age = {30} isStudent = {true}/>
      <Student name ='Patrick' age = {22} isStudent = {false}/>
      <Student name = 'Squidward' age = {44} isStudent = {false}/>
      <Student name = 'Sandy' age = {27} isStudent = {true}/>
      <Student />
    </>
  )
}

export default App
