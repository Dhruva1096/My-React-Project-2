import {MdMessage} from "react-icons/md";

import styles from "./Button.module.css";

const Button = (props) => {
  const {isoutline,icon,text,...rest} =props;

    
  return (
    <button {...rest}
    className={isoutline ? styles.outline_btn : styles.priary_btn}>

        
       
        {props.icon}
        {props.text}
        </button>
  );
};

export default Button;