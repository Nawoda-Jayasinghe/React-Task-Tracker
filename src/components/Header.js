import PropTypes from "prop-types";
import Button from "./Button";

// const buttonClick = () =>{
//     console.log("First Click!")
// }

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      {/* <h1 style={ headingStyle}> {title} task tracker</h1> */}
      <h1> {title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
      {/* <Button color='yellow' text='ok'/> */}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

//*****this can use to validate inputs
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headingStyle = {
//     color: 'red',
//     backgroundColor : 'gray'
// }

export default Header;
