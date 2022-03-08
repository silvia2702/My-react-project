import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import './movieReviewDisplay.css'

const prj = [
  {
    title: "Attack on Titan 10/10",
    entry: "Honestly, aot is one of the best shows I've ever watched. The way all the details and plot points come together is incredible. My favorite character is Mikasa; I mean she is such a girl boss. I am in season 4, and I have to say I am not a Yeagerist. What he is doing is wrong because he is doing the same thing that Reiner and Bertolt. I get he wants to get revenge, but he is just making Eladians look bad.",
    src: 'https://i.insider.com/61d775e137afc20019ac9849?width=700',
    key: 1
  },
  
  {
    title: "Haikyu",
    entry: "Tsuki",
    src: 'https://assets.puzzlefactory.pl/puzzle/293/695/original.jpg',
    key: 2
  },

  {
    title: "Naruto",
    entry: "What a drag",
    src: 'https://ataglanceanimehome.files.wordpress.com/2020/08/naruto.jpg',
    key:3
  },

  {
    title: "Hercai",
    entry: "Miran :D",
    src: 'data:image/jpeg;base64,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',
    key: 4
  },

  {
    title: "Grey's Atatomy",
    entry: "Christina",
    src: 'https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Famazonadviser.com%2Ffiles%2F2017%2F01%2FGreys-Anatomy.jpg',
    key: 5
  },


]
function movieReviewDisplay() {
  return (
    <div className = 'movie-review'>
     <img className = 'movie-review-background' alt = 'skyscraper background' src = 'https://media.istockphoto.com/vectors/dark-blue-nightly-brick-wall-realistic-design-background-vector-id1320984490?k=20&m=1320984490&s=612x612&w=0&h=bmv0uNsAzg6T5hLsOZXI_0DTMo4fSfo5DjHhSoymQpY=' >
      </img>
      {prj.map((item) => <ProjectCard props={item} key={item.key}/>)} 
    </div>
  )
}

export default movieReviewDisplay