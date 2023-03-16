import '../styles/components/projectscontainer.sass'

import academia from '../img/academia.png'
import login from '../img/login.png'
import climatempo from '../img/climatempo.png'
import netflix from '../img/netflix.png'
import calculadora from '../img/calc.png'
import cadastro from '../img/sitecadastro.png'
import todolist from '../img/todolist.png'
import filmes from '../img/filmes1.png'




const projects = [

    { id: "academia", name: "Academia HardCore", image: academia, link: "https://pedrogoulart8.github.io/Academia-Hardcore/" },
    { id: "login", name: "Tela Login", image: login, link: "https://pedrogoulart8.github.io/Tela-de-Login-com-POO/" },
    { id: "filmes", name: "Movies Library", image: filmes, link: "https://pedro-goulart-api-filmes-react.vercel.app/" },   
    { id: "climatempo", name: "Clima Tempo", image: climatempo, link: "https://pedrogoulart8.github.io/API-Clima-Tempo/" },
    { id: "todo", name: "To Do List", image: todolist, link: "https://pedrogoulart8.github.io/to-do-list-react/" },  
    { id: "netflix", name: "Netflix", image: netflix, link: "https://pedrogoulart8.github.io/Clone-streaming-ntfix/" },
    { id: "Calculadora", name: "Calculadora", image: calculadora, link: "https://pedrogoulart8.github.io/Projeto-Calculadora-JS/" },   
    { id: "cadastro", name: "Simulação Cadastro", image: cadastro, link: "https://pedrogoulart8.github.io/API-Cadastro-de-Clientes/" }

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