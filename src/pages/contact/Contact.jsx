import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import './contact.css';
const Contact = () => {
    return (
        <>
            <section className="contact">
                <div className="container contact__container">
                    <div className="contact__wrapper">
                        <h2 className="container_title">Get in Touch...</h2>
                        <div className="contact_link">
                            <a href="mailto:upatrick59@yahoo.com" target="_blank" rel="noreferrer noopener"><MdEmail /></a>
                            <a href="https://web.facebook.com/profile.php?id=100009509288525" target="_blank" rel="noreferrer noopener"><BsMessenger /></a>
                            <a href="http://wa.me/+2347033967864" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp /></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact