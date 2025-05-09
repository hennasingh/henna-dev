import React from 'react'
import { getProjects } from '../firebase'
import ProjectCard from './ProjectCard'

export default function Projects() {

    const [ projects, setProjects] = React.useState([])

    React.useEffect(() => {
        async function loadProjects() {
            try {
                const data = await getProjects()
                setProjects(data)
            } catch (err) {
                console.log(err)
            }
        }
        loadProjects()
   }, [])

   const projectList = projects?.map((project, idx) => {
        return <ProjectCard key={idx} props={project} />      
   })

    return (
        <section className="sec-projects" id="projects">
            <div className="container">
                <h1>Projects</h1>
                <p>Below are few recent projects I worked on with links to the code and live version.</p>
                    {projectList}
            </div>
        </section>
    )
}