import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import {MdMessage} from "react-icons/md";
import {FaPhoneAlt} from "react-icons/Fa";
import {HiMail} from "react-icons/Hi"
const ContactForm = () => {
  const onViaCallSubmit = () => {
    console.log("i am form call");

  };






  

return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          < div className={styles.top_btn}>
          <Button text=" VIA SUPPORT CHAT" icon={<MdMessage fontsize="24px"/>} />



          

            <Button 
            onclick={onViaCallSubmit}
            
            
            text=" VIA CALL" icon={<FaPhoneAlt fontsize="24px" />} />

          </div>
          <Button isoutline={true}
           text=" VIA EMAIL FORM" icon={<HiMail fontsize="24px" />} />

            <form
            onsubmit={onsubmit}>
              <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name"/>
              </div>
              <div className={styles.form_control}>
              <label htmlFor="email">E-Mail</label>
              <input type="email" name="email"/>
              </div>
              <div className={styles.form_control}>
              <label htmlFor="text">TEXT</label>
              <textarea name="text" rows="8"/>
              </div>
              <div style={{display:"flex",justifyContent:"end"}}>
              <Button  text=" SUBMIT"  />
              </div>
              

              
            </form>


        </div>
        <div className={styles.contact_image}>
          <img src="/images/contact.svg" alt="contact image"/>
        </div>
        
        </section>

    
  );
};

export default ContactForm;