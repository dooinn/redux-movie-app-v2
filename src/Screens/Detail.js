import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetMovieCasts, GetMovieDetail, GetMovieVideo, GetSimilarMovie, addMovieToFavorite } from '../actions/movieActions'
import ReactPlayer from "react-player";
import { LoadingBox } from '../Components/LoadingBox';
import { Section } from '../styles/DetailStyle';
import { Link } from 'react-router-dom'
import { MdBookmark } from 'react-icons/md'



const Detail = ({ match }) => {

    const POSTER_URL = 'https://image.tmdb.org/t/p/original/';
    const PORTRAIT_URL = 'https://image.tmdb.org/t/p/w200';
    const YOUTUBE_URL = "https://www.youtube.com/watch?v=";

    let params = match.params;
    const dispatch = useDispatch();
    const detail = useSelector(state => state.DetailMovie)
    const trailer = useSelector(state => state.MovieVideo)
    const casts = useSelector(state => state.MovieCasts)
    const similar = useSelector(state => state.SimilarMovie)
    // const addFavorite = useSelector(state => state.FavoriteMovie)


    useEffect(() => {
        const fetchAPI = async () => {
            dispatch(GetMovieDetail(params.id))
            dispatch(GetMovieVideo(params.id))
            dispatch(GetMovieCasts(params.id))
            dispatch(GetSimilarMovie(params.id))
        }
        fetchAPI();
    }, [params.id])


    // let storedMovie = watchlist.find((item) => item.id === detail.id);
    // const watchlistDisabled = storedMovie ? true : false;

    return (
        <Section>
            {detail.loading ?
                <LoadingBox></LoadingBox>
                :
                <>
                    <img src={POSTER_URL + detail.movie.backdrop_path} className="poster__background" />

                    <div className="contents__container">
                        <button
                            className="save__btn"
                        // disabled={watchlistDisabled}
                        // onClick={() => addMovieToWatchlist(detail)}
                        >
                            <MdBookmark style={{ fontSize: "4rem" }} />
                        </button>
                        <div className="contents__subcontainer">
                            <div classname="casts__container">
                                <div className="casts__wrap">
                                    {casts.loading ?
                                        <LoadingBox></LoadingBox>
                                        :
                                        <>
                                            {casts.people.map((cast, index) => {
                                                return (
                                                    <div className="cast__info" key={index}>
                                                        {cast.profile_path ?
                                                            <Link to={"/person/" + cast.id}>
                                                                <img className="profile__pic" src={PORTRAIT_URL + cast.profile_path} />
                                                            </Link>
                                                            : <Link>
                                                                <img className="profile__pic" src="data:image/jpeg;base64,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" />
                                                            </Link>
                                                        }
                                                        <div className="cast__name">
                                                            <h5>{cast.original_name}</h5>
                                                            <h6>({cast.character})</h6>
                                                        </div>


                                                    </div>
                                                )
                                            })}
                                        </>
                                    }
                                </div>
                            </div>
                            <div className="description__container">
                                <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>{detail.movie.title}</h1>
                                <div className="genre__wrap" style={{ marginBottom: "1rem" }}>
                                    {detail.movie.genres.map((genre, index) => {
                                        return (
                                            <p className="genre__tag" key={index}>{genre.name}</p>
                                        )
                                    })}
                                </div>
                                <p style={{ marginBottom: "1rem" }}><b>Running Time:</b> {detail.movie.runtime}mins</p>
                                <p style={{ marginBottom: "1rem" }}><b>Released at:</b>{detail.movie.release_date}</p>
                                <b>Overview:</b>
                                <p style={{ marginBottom: "1rem" }}>{detail.movie.overview}</p>
                            </div>
                            {trailer.loading ?
                                <LoadingBox></LoadingBox> :
                                <div className="video__container" >
                                    {trailer.video &&
                                        <ReactPlayer
                                            className="video__player"
                                            url={YOUTUBE_URL + trailer.video.key}
                                            playing
                                            width="100%"

                                        ></ReactPlayer>
                                    }
                                </div>
                            }

                        </div>


                    </div>
                    <div className="similarMovie__container">
                        <h3 style={{ marginBottom: "1rem", color: "white" }}>Looking for similar movies with "{detail.movie.title}" ?</h3>
                        <div className="similarMovie__wrap">
                            {similar.loading ?
                                <LoadingBox></LoadingBox> :
                                <>
                                    {similar.data.map((movie, index) => {
                                        return (
                                            <Link to={"/movie/" + movie.id}>
                                                <img key={index} className="movie__poster" src={POSTER_URL + movie.poster_path} alt={movie.title}></img>
                                            </Link>

                                        )
                                    })}
                                </>
                            }
                        </div>
                    </div>
                </>
            }
        </Section>
    )
}

export default Detail
