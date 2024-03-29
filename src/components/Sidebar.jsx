
import Avatar from '../img/eu.png'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'
import SocialNetworks from './SocialNetworks'

const Sidebar = () => {

    return (

        <aside id="sidebar">
            <img src={Avatar} alt="Imagem de Pedro" ></img>
            <p className="title">Desenvolvedor Front-End</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="https://drive.google.com/file/d/1uChysia-YYK9wm-u5scx8ZyrxFFfUVZa/view?usp=drive_link" className="btn" >Curriculo PDF</a>
        </aside>

    )


};


export default Sidebar