
function FruitList (props){

    const category = props.category;
    const itemlist = props.items;

    const fruitlistitems = itemlist.map(item => <li key = {item.id}>
                                                 {item.name}: &nbsp;
                                                 <b>{item.calories}</b></li>)

    return(
    <>
    <h3 className = "list-category">{category}</h3>
    <ol className = "list-items">{fruitlistitems}</ol>   
    
     </>);
}

export default FruitList;