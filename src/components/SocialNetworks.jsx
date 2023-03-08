import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'


const socialnetworks = [

    { name: "linkedin", link:"https://www.linkedin.com/in/pedromgoulart/", icon: <FaLinkedinIn/>},
    { name: "github", link: "https://github.com/pedrogoulart8" , icon: <FaGithub/>},
    

]


const SocialNetworks = () => {

    return(

        <section id='social-networks'>
            
            {socialnetworks.map((network) => (

                <a href={network.link} className='social-btn' id={network.name} key={network.name} >
                    {network.icon}
                    </a>

            ))}

        </section>

    )

}

export default SocialNetworks