import React, {useEffect, useState} from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import './movieReviewDisplay.css'


function MovieReviewDisplay() {

  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/posts")
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setProjects(data)
    })
    .catch((err) => console.error(err)
    )
  }, [])

  return (
    <div className = 'movie-review'>
     <img className = 'movie-review-background' alt = 'skyscraper background' src = 'https://media.istockphoto.com/photos/hong-kong-central-district-skyscrapers-picture-id1295925635?b=1&k=20&m=1295925635&s=170667a&w=0&h=bN2-c8qkoMGV1MwrppQnL94OHbSbls6Bc3Vk9Od79uE=' >
      </img>
      {projects.map((item) => <ProjectCard props={item} key={item.key}/>)} 
    </div>
  )
}

export default MovieReviewDisplay