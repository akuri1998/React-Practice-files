
import React, {useState} from "react";

function MyComponent (){

    const [name, setName] = useState("Gurava");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsworking] = useState(true);

    const updateName = () => {
        setName ("Reddy");

    }

    const IncrementAge = () => {
        setAge(age + 2);
    }

    const employee_status = () => {
        setIsworking(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick = {updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick = {IncrementAge}>Increment Age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick = {employee_status}>Employee Status</button>
        </div>
    );

}

export default MyComponent