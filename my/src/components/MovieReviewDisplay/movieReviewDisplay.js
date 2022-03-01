import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import './movieReviewDisplay.css'

const prj = [{
    title: "Attack on Titan",
    entry: "Eren Yeager",
    src: 'https://images.unsplash.com/photo-1531558506007-fe311a2f4729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2t5c2NyYXBlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    key: 1

},

]
function movieReviewDisplay() {
  return (
    <div className = 'movie-review'>movieReviewDisplay
     <img className = 'movie-review-background' alt = 'skyscraper background' src = 'https://images.unsplash.com/photo-1531558506007-fe311a2f4729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2t5c2NyYXBlcnxlbnwwfHwwfHw%3D&w=1000&q=80' >
      </img>
      {prj.map((item) => <ProjectCard props={item} key={item.key}/>)} 
    </div>
  )
}

export default movieReviewDisplay