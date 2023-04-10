import AboutContainer from './AboutContainer'
import ProjectsContainer from './ProjectsContainer'
import TechnologiesContainer from './TechnologiesContainer'

import '../styles/components/maincontent.sass'

const MainContent = () => {

    return (

        <main id='main-content'>
            <AboutContainer />
            <br /><br />
            <TechnologiesContainer />
            <br /><br />
            <ProjectsContainer />
        </main>

    )

}

export default MainContent