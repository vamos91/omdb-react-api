import React from 'react'
import {Link} from 'react-router-dom'
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Col
} from 'reactstrap'

function MovieCard({title, poster, id}) {
  return (
    <Col md="3">
        <Card
            style={{
                width: '18rem'
            }}
            >
            <img
                alt="Sample"
                src={poster}
            />
            <CardBody>
                <CardTitle tag="h5">
                {title}
                </CardTitle>
                <Link to={`/movies/${id}`} className='btn btn-primary'>
                    Voir
                </Link>
            </CardBody>
        </Card>
    </Col>
    
  )
}

export default MovieCard