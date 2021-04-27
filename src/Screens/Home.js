import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetNowPlayingMovie, GetPopularMovie, GetTopRatedMovie, GetUpcomingMovie, GetLatestMovie } from '../actions/movieActions'
import { Section } from '../styles/HomeStyle'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

import { Link } from 'react-router-dom';


const Home = () => {

    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const dispatch = useDispatch();
    const popularMovie = useSelector(state => state.PopularMovie);
    const topRatedMovie = useSelector(state => state.TopRatedMovie);
    const latest = useSelector(state => state.LatestMovie);
    const nowPlaying = useSelector(state => state.NowPlayingMovie);
    const upComing = useSelector(state => state.UpComingMovie);
    const [currentImageIdx, setCurrentImageIdx] = useState(0)

    useEffect(() => {
        const fetchAPI = async () => {
            dispatch(GetPopularMovie())
            dispatch(GetTopRatedMovie())
            dispatch(GetNowPlayingMovie())
            dispatch(GetUpcomingMovie())
            dispatch(GetLatestMovie())
        }
        fetchAPI();
    }, [])

    const prevSlide = () => {
        const resetToVeryBack = currentImageIdx === 0;
        const index = resetToVeryBack ? nowPlaying.data.length - 1 : currentImageIdx - 1;
        setCurrentImageIdx(index);
    }

    const nextSlide = () => {
        const resetIndex = currentImageIdx === nowPlaying.data.length - 1;
        const index = resetIndex ? 0 : currentImageIdx + 1;
        setCurrentImageIdx(index);
    }

    const movieSourcesToDisplay = nowPlaying.data.slice(
        currentImageIdx,
        currentImageIdx + 1
    );

    // useEffect(() => {
    //     const handleAutoplay = setInterval(nextSlide, 5000);
    //     return () => clearInterval(handleAutoplay);
    // }, [nextSlide]);



    return (
        <Section>
            <div className="carousel__container">
                {movieSourcesToDisplay.map((movie, index) => {
                    return (
                        <div className="slider__container" key={index}>
                            <img className="slider__background" src={posterUrl + movie.backdrop_path} style={{ width: "100%" }} />
                            <div className="description__container">
                                <div className="description__box">
                                    <h1>{movie.title.slice(0, 30)}</h1>
                                    <h4 style={{ marginBottom: "1rem" }}><b>Released at:</b>{movie.release_date}</h4>
                                    <p style={{ marginBottom: "3rem" }}>{movie.overview.slice(0, 150)}</p>
                                    <Link to={"/movie/" + movie.id} className="detail__btn">See Detail</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="sliderBtn__container">
                    <button className="prev sliderBtn" onClick={prevSlide}><RiArrowLeftSLine /></button>
                    <button className="next sliderBtn" onClick={nextSlide}><RiArrowRightSLine /></button>
                </div>
            </div>
            <div className="movieCategory__container">
                <div className="category_header">
                    <h1 className="category__text">Popular</h1>
                    <Link className="seeAll-link" to="/popular-list">See all</Link>
                </div>
                <div className="movie__container">
                    {popularMovie.data.map(movie => {
                        return (
                            <div className="movie__wrap" key={movie.id}>
                                <Link to={"/movie/" + movie.id}>
                                    <div className="poster__overlay">
                                        <p>{movie.title}</p>
                                        <p>({movie.release_date.slice(0, 4)})</p>
                                        <p>Rate: {movie.vote_average}/10</p>
                                    </div>
                                </Link>

                                <img className="movie__poster" src={posterUrl + movie.poster_path} />

                            </div>
                        )
                    })}
                </div>

                <div className="category_header">
                    <h1 className="category__text">Top Rated</h1>
                    <Link className="seeAll-link" to="/toprated-list">See all</Link>
                </div>
                <div className="movie__container">
                    {topRatedMovie.data.map(movie => {
                        return (
                            <div className="movie__wrap" key={movie.id}>
                                <Link to={"/movie/" + movie.id}>
                                    <div className="poster__overlay">
                                        <p>{movie.title}</p>
                                        <p>({movie.release_date.slice(0, 4)})</p>
                                        <p>Rate: {movie.vote_average}/10</p>
                                    </div>
                                </Link>

                                <img className="movie__poster" src={posterUrl + movie.backdrop_path} />

                            </div>
                        )
                    })}
                </div>
                <div className="category_header">
                    <h1 className="category__text">Upcoming</h1>
                    <Link className="seeAll-link" to="/upcoming-list">See all</Link>
                </div>
                <div className="movie__container">
                    {upComing.data.map(movie => {
                        return (
                            <div className="movie__wrap" key={movie.id}>
                                <Link to={"/movie/" + movie.id}>
                                    <div className="poster__overlay">
                                        <p>{movie.title}</p>
                                        <p>({movie.release_date.slice(0, 4)})</p>
                                        <p>Rate: {movie.vote_average}/10</p>
                                    </div>
                                </Link>

                                <img className="movie__poster" src={posterUrl + movie.backdrop_path} />
                            </div>
                        )
                    })}
                </div>


            </div>

        </Section>



    )
}

export default Home
