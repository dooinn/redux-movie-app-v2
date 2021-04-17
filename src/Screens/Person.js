import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPersonDetail, GetPersonCredits } from '../actions/personActions';
import { LoadingBox } from '../Components/LoadingBox';
import { Section } from '../styles/PersonStyles'

const Person = ({ match }) => {

    const POSTER_URL = 'https://image.tmdb.org/t/p/original/';

    let params = match.params;
    const dispatch = useDispatch();
    const detail = useSelector(state => state.PersonDetail)
    const credits = useSelector(state => state.PersonCredits)

    useEffect(() => {
        const fetchAPI = async () => {
            dispatch(GetPersonDetail(params.id))
            dispatch(GetPersonCredits(params.id))
        }
        fetchAPI();

    }, [params.id])

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


                        </div>

                    </div>
                </>
            }

        </Section>
    )
}

export default Person
