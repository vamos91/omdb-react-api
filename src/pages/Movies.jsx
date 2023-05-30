import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import {Container, Row, InputGroup, Button, Input} from 'reactstrap'

function Movies() {
  const [movies, setMovies] = useState([])
  const [userInput, setUserInput] = useState('marvel')

  const getMovies = async () => {
    const movies = await fetch(`https://www.omdbapi.com/?s=${userInput}&apikey=4c95cc37`)
    if(movies.status === 200){
      const moviesJson = await movies.json()
      console.log(moviesJson.Search)
      setMovies(moviesJson.Search)
    }else{
      console.log('Error from server')
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <Container>
      <InputGroup>
        <Button onClick={() => getMovies()}>
          Search movie
        </Button>
        <Input 
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </InputGroup>
      <Row>
      {
        movies && (
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} id={movie.imdbID} title={movie.Title} poster={movie.Poster} />
          ))
        )
      }
      </ Row>
    </Container>  
  )
}

export default Movies