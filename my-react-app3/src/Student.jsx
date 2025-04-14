// proptypes = a mechanism thta ensures that the passed value is 
//             of the correct datatype.
//             age:PropTypes.number

// defaultprops = default values for props in case they are not 
//                passed from the parent component 
//                name: "Guest"

import PropTypes from 'prop-types';

function Student (props) {
    return (
        <div className = "student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes"  : "No" }</p>
        </div>
    );
}
Student.ProtoTypes = {
    name:ProtoTypes.string,
    age:ProtoTypes.number,
    isStudent:PropTypes.bool,

}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student