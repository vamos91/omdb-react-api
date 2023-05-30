import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,

} from 'reactstrap'

function Movie() {
  const [movie, setMovie] = useState({})
  const { id } = useParams()
 
  const url = `https://www.omdbapi.com/?i=${id}&plot=full&apikey=4c95cc37`
  
  useEffect(() => {
   const getOneMovie = async () => {
      const movie = await fetch(url)
      const movieJson = await movie.json()
      console.log(movieJson)
      setMovie(movieJson)
    }
    getOneMovie()
  }, [])


  return (
    <div>
      <Card className="my-2" style={{width: '30%'}}>
        <CardImg
          alt="Card image cap"
          src={movie.Poster}
          style={{
            //height: 180
          }}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">
            {movie.Title}
          </CardTitle>
          <CardText>
            {movie.Plot}
          </CardText>
          <CardText>
            <small className="text-muted">
              Last updated 3 mins ago
            </small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default Movie