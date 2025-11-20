import avatar from '../images/avatar.jpg'
import email from '../images/icons/email.png'
import linkedin from '../images/icons/social.png'

export function Header () {
    return (
        <header>
            <img src={avatar} alt='avatar'/>
            <h1>Laura Smith</h1>
            <p id='career-infor'>Frontend Developer</p>
            <p>laurasmith.website</p>
            <div>
                <div>
                    <img src={email} alt='email icon'/>
                    <p>Email</p>
                </div>
                <div>
                    <img src={linkedin} alt='linkedin logo'/>
                    <p>LinkedIn</p>
                </div>
            </div>
        </header>
    )
}