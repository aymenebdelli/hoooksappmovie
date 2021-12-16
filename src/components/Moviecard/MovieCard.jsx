import React from 'react'
import { Card } from 'react-bootstrap'
function MovieCard({ movie }) {
    return (
        <div>
            <Card style={{ backgroundColor: 'aqua', margin: '12px', width: '18rem', height: '25rem', boxShadow: '0 16px 60px rgba(0, 0, 0, 0.3)', cursor: 'pointer', borderRadius: '20px' }}>
                <Card.Img variant="top" src={movie.posterUrl} style={{ width: '100%', height: '50%', borderRadius: '20px' }} />
                <Card.Body>
                    <Card.Title style={{ color: 'bronze', fontStyle: 'oblique' }} >{movie.title}</Card.Title>
                    <Card.Text style={{ fontSize: '12px', fontWeight: 'bold', fontFamily: 'cursive' }} >
                        {movie.description}
                    </Card.Text>
                    <h3 style={{ fontSize: '15px' }}>{"⭐".repeat(movie.rating)}</h3>

                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
