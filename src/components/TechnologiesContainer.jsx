import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiBootstrap,
    DiSass,
    DiReact,
    DiWordpress,
    DiGit,
    DiGoogleAnalytics,
    DiGithubBadge
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'


const technologies = [

    {id: "react", name: "React", icon: <DiReact/>},
    {id: "js", name: "JavaScript", icon: <DiJsBadge/>},
    {id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap/>},
    {id: "sass", name: "Sass", icon: <DiSass/>},
    {id: "html", name: "HTML5", icon: <DiHtml5/>},
    {id: "css", name: "CSS3", icon: <DiCss3/>},
    {id: "git", name: "Git", icon: <DiGit/>},
    {id: "github", name: "GitHub", icon: <DiGithubBadge/>},
    {id: "wordpress", name: "WordPress", icon: <DiWordpress/>},
    {id: "analytics", name: "Google Analytics", icon: <DiGoogleAnalytics/>},
    
]


const TechnologiesContainer = () => {

    return(

        <section className='technologies-container' >
            <h2>Tecnologias</h2>

            <div className='technologies-grid' >
                {technologies.map((tech) => (

                    <div className='technology-card' id={tech.id} key={tech.id} >
                        {tech.icon}

                        <div className='technology-info' >
                            <h3>{tech.name}</h3>
                        </div>
                        
                    </div>

                ))}
            </div>

        </section>

    )

}

export default TechnologiesContainer