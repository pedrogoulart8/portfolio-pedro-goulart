import '../styles/components/projectscontainer.sass'

import academia from '../img/academia.png'
import login from '../img/login.png'
import climatempo from '../img/climatempo.png'
import calculadora from '../img/calc.png'
import todolist from '../img/todolist.png'
import filmes from '../img/filmes1.png'
import secretportfolio from '../img/secretportfolio.png'
import miniblog from '../img/miniblog.png'
import stock2 from '../img/stock2.png'




const projects = [

    { id: "blog", name: "Mini Blog", image: miniblog, link: "https://pedrogoulart8.github.io/miniblog-react/" },
    { id: "estoque", name: "Controle de Estoque", image: stock2, link: "https://projeto-estoque-pedrogoulart8.vercel.app/" },
    { id: "academia", name: "Academia HardCore", image: academia, link: "https://pedrogoulart8.github.io/Academia-Hardcore/" },
    { id: "login", name: "Tela Login", image: login, link: "https://pedrogoulart8.github.io/Tela-de-Login-com-POO/" },
    { id: "filmes", name: "Movies Library", image: filmes, link: "https://pedrogoulart8.github.io/movies-react/" },  
    { id: "secret", name: "Secret Word", image: secretportfolio, link: "https://pedrogoulart8.github.io/jogo-secret-word/" }, 
    { id: "climatempo", name: "Clima Tempo", image: climatempo, link: "https://pedrogoulart8.github.io/API-Clima-Tempo/" },
    { id: "todo", name: "To Do List", image: todolist, link: "https://pedrogoulart8.github.io/to-do-list-react/" },  
    { id: "Calculadora", name: "Calculadora", image: calculadora, link: "https://pedrogoulart8.github.io/Projeto-Calculadora-JS/" },   
   
]

const ProjectsContainer = () => {

    return (

        <section className='project-container'>
            <h2>Projetos</h2>

            <div className="project-grid">
                {projects.map((proj) => (

                    <div className="project-card" id={proj.id} key={proj.id} >

                        <div className="project-info">
                            <h3>{proj.name}</h3>

                            <a href={proj.link}>
                                <img src={proj.image}/>
                            </a>
                        </div>

                    </div>

                ))}

            </div>



        </section>

    )

}

export default ProjectsContainer