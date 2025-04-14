
function List () {

    const fruits = [{id: 1, name: "apple", calories: 97}, 
                    {id: 2, name: "Banana",calories: 45},
                    {id: 3, name: "orange", calories: 105},
                    {id: 4, name: "coconut", calories: 159},
                    {id: 5, name: "pineapple", calories: 37}];

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical
    //fruits.sort((a, b) => b.name.localeCompare(b.name)); //reverse alphabetical
    //fruits.sort((a, b) => a.calories - b.calories); //numeric
    //fruits.sort((a, b) => b.calories - a.calories); //reverse numeric

    const highcalfruits = fruits.filter(fruit => fruit.calories >= 100);

    const listitems = highcalfruits.map(highcalfruits => <li key = {highcalfruits.id}>{highcalfruits.name}:
                                                   &nbsp;<b> {highcalfruits.calories}</b> </li>);

    return(<ul>{listitems}</ul>);
    
}

export default List;