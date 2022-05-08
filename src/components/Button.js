import PropTypes from 'prop-types'; //impt

// const Button = (props) => {  //rafce
//   return (
//     <button className='btn' style={{backgroundColor:props.color}}>{props.text}</button>
//   )
// }
const buttonClicked = () =>{
    console.log("Clicked!")
}

const Button = ({color,text, onClick}) => {
    return (
      <button className='btn' style={{backgroundColor:color} } onClick={onClick}>{text}</button>
    )
  }

  //ddefault props for the button

  Button.defaultProps = {
      color: 'red',
  }

  //these are some sort of validations we use
Button.prototype = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick : PropTypes.func
}

export default Button