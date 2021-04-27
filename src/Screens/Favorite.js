import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddToFavorite } from '../actions/movieActions'
import { Section, MovieGrid } from '../styles/FavoriteStyle'
import { Link } from 'react-router-dom'



const Favorite = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.Favorite);

    useEffect(() => {
        console.log("favo", favorites)
    }, [])

    const removeMovieFromWatchlist = (item) => {
        dispatch(AddToFavorite(item.movie));

    }



    return (
        <Section>
            <h1>My Movie List</h1>
            <MovieGrid>
                {favorites.length > 0 ? favorites.map((item) => (

                    <div className="movie__container" key={item.id}>
                        <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} />
                        <div className="overlay__btn">
                            <Link className="movie__link" to={`/movie/${item.id}`}><h3>See Movie</h3></Link>
                            <button className="delete__btn" onClick={() => removeMovieFromWatchlist(item.id)}>X Delete From List</button>
                        </div>
                    </div>

                )) : <h1>Make your own movie list!</h1>}
            </MovieGrid>


        </Section>
    )
}

export default Favorite
