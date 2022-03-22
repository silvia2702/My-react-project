import React, {useEffect} from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import './movieReviewDisplay.css'

useEffect(() => {
  fetch("http:localhost:8080/posts")
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
})
  
function movieReviewDisplay() {
  return (
    <div className = 'movie-review'>
     <img className = 'movie-review-background' alt = 'skyscraper background' src = 'https://media.istockphoto.com/vectors/dark-blue-nightly-brick-wall-realistic-design-background-vector-id1320984490?k=20&m=1320984490&s=612x612&w=0&h=bmv0uNsAzg6T5hLsOZXI_0DTMo4fSfo5DjHhSoymQpY=' >
      </img>
      {/* {prj.map((item) => <ProjectCard props={item} key={item.key}/>)}  */}
    </div>
  )
}

export default movieReviewDisplay