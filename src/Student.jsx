import PropTypes from 'prop-types';

function Student ({name, age = 0, isStudent = false}) {
    // console.log("props");
    // props.name = "Something else";
    return (
    <div className="student">
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>);
}

console.log(Student);

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

// This causes a bug
// Student.defaultProps = {
//     name: 0,
//     age: 0,
//     isStudent: false,
// }

export default Student;