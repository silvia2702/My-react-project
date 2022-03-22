import React from 'react'
import './ProjectCard.css'

function ProjectCard({props}) {
  return (
    <div className = "project-card-container">
        <img src = {props.src} alt = ''></img>
        <div>
          <div className = "project-card-title">
            <h1>{props.title}</h1>
            <h1>{props.score}/10</h1>
          </div>
            <p>
                {props.entry}
            </p>
        </div>
    </div>
  )
}

export default ProjectCard