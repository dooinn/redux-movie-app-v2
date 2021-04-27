import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPersonDetail, GetPersonCredits } from '../actions/personActions';
import { LoadingBox } from '../Components/LoadingBox';
import { Section } from '../styles/PersonStyles'
import { Link } from 'react-router-dom'

const Person = ({ match }) => {

    const POSTER_URL = 'https://image.tmdb.org/t/p/original/';

    let params = match.params;
    const dispatch = useDispatch();
    const detail = useSelector(state => state.PersonDetail)
    const credits = useSelector(state => state.PersonCredits)
    const [newCredits, setNewCredits] = useState([])


    useEffect(() => {
        const fetchAPI = async () => {
            dispatch(GetPersonDetail(params.id))
            dispatch(GetPersonCredits(params.id))

        }
        fetchAPI();

    }, [params.id])


    useEffect(() => {
        let newData = credits.data
        setNewCredits(newData)

    }, [])



    const creditsList = () => {
        let newCredits = credits.data;
        return (
            newCredits.map((credit, index) => {
                return (
                    <div className="movie__container" key={index}>
                        <img className="movie__poster" src={POSTER_URL + credit.poster_path} alt="poster" />
                        <p>{credit.title}</p>
                        <p>{credit.release_date}</p>
                    </div>
                )
            })
        )
    }



    return (
        <Section>
            {detail.loading ?
                <LoadingBox></LoadingBox>
                :
                <>
                    <img src={POSTER_URL + detail.person.profile_path} className="poster__background" />
                    <div className="contents__container">
                        <div className="contents__subcontainer">
                            <div className="description__container">
                                <h1 className="name__container">{detail.person.name}</h1>
                                <b>{detail.person.birthday} ~ {detail.person.deathday}</b>
                                <p className="biography__container">{detail.person.biography}</p>
                            </div>
                            <div>
                                <h1>{detail.person.name}'s movie credits</h1>
                                <div className="movieCredits__container">
                                    {newCredits.map((credit, index) => {
                                        return (
                                            <div className="movie__container" key={index}>
                                                <Link to={"/movie/" + credit.id}>
                                                    <img className="movie__poster" src={POSTER_URL + credit.poster_path} alt="poster" />
                                                </Link>

                                                <p>{credit.title}</p>
                                                <p>{credit.release_date}</p>
                                                <p>({credit.character})</p>
                                            </div>

                                        )
                                    })}


                                </div>
                            </div>



                        </div>

                    </div>
                </>
            }









        </Section>
    )
}

export default Person
