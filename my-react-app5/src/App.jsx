import FruitList from "./FruitList.jsx"

function App() {
  
  const fruits = [{id: 1, name: "apple", calories: 97}, 
                 {id: 2, name: "Banana",calories: 45},
                 {id: 3, name: "orange", calories: 105},
                 {id: 4, name: "coconut", calories: 159},
                 {id: 5, name: "pineapple", calories: 37}];



  const vegetables = [{id: 6, name: "potato", calories: 97}, 
                  {id: 7, name: "cabbage",calories: 45},
                  {id: 8, name: "spinach", calories: 105},
                  {id: 9, name: "mushroom", calories: 159},
                  {id: 10, name: "broccoli", calories: 37}];

  return (
    <>
      <FruitList items = {fruits} category = "Fruits"/>
      <FruitList items = {vegetables} category = "vegetables"/>
    </>
  );
}

export default App
