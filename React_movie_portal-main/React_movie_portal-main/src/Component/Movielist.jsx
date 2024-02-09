import React from 'react'
import { MovieCard } from './MovieCard'

export default function MovieData() {
  const data = [
    {
      name: "The Shawshank Redemption",
      rating:"9.3",
      poster: "https://th.bing.com/th/id/OIP.H1gGsL4Lnm88OZk8lPtsWgHaEK?rs=1&pid=ImgDetMain",
      alt:"The Shawshank Redemption",
      summary: "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner."
    },
    {
      name: "The Godfather",
      rating:"9.2",
      poster: "https://th.bing.com/th/id/OIP.oKJkUHZhlIWpaHxuhe8jxAHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      alt:"The Godfather",
      summary: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son, Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger."
    },
    {
      name: "The Dark Knight",
      rating:"9.0",
      poster: "https://th.bing.com/th/id/OIP.mAy-ufIcWxjWCfjNemJ7aAHaFj?w=248&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      alt:"The Dark Knight",
      summary: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {
      name: "Fight Club",
      rating:"8.8",
      poster: "https://th.bing.com/th/id/OIP.bVGT28uZRL88UBu-9w1G7gHaDt?w=335&h=174&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      alt: "Fight Club",
      summary: "Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister."
    },
    {
      name: "American Psycho",
      rating: "7.6",
      poster: "https://tse2.mm.bing.net/th?id=OIP.uHHjb251DwsCbG8_lkpj0gHaEK&pid=Api&P=0&h=180",
      alt: "American Psycho",
      summary: "Patrick Bateman, a wealthy investment banker, hides his psychopathic ego from his friends. Later, his illogical fantasies escalate and he submits to an uncontrollable bloodlust."
    }
  ]
  return (
      <div className='App'>
      {
        data.map((list, index) => (
          <div key={index}>
            <MovieCard name={list.name} rating={list.rating} poster={list.poster} summary={list.summary} />
          </div>
        ))
      }
    </div>
  )
}
