import React from 'react'
import { convertGsUrlToHttpUrl } from '../firebase'

export default function ProjectCard({props}) {
    const {image, title, description, projectUrl, githubUrl} = props

    const [imageUrl, setImageUrl] = React.useState(null)

    React.useEffect(() => {
        async function fetchImage() {
            try {
                const httpUrl = await convertGsUrlToHttpUrl(image)
                setImageUrl(httpUrl)
            } catch(error) {
                console.error("Error fetching image URL:", error)
            }
        }
        fetchImage()
    }, [image])

    
    return (
        <div className='project-container'>
            <img src={imageUrl} alt={title} />

            <div className='project-body'>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='links'>
                    <a href={githubUrl} target="_blank">Source Code</a>
                    <a href={projectUrl} target="_blank">Live Demo</a>
                </div>
            </div>

        </div>
    )
}