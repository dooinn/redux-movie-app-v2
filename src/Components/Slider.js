import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetNowPlayingMovie } from '../actions/movieActions'
import { AnimatePresence } from 'framer-motion';
import { HeroSection, HeroWrapper, HeroSlide, HeroSlider, HeroImage, HeroContent, SliderButtons, PrevArrow, NextArrow } from '../styles/SliderStyle'
import { Link } from 'react-router-dom'

const Slider = () => {

    const dispatch = useDispatch();
    const nowPlaying = useSelector(state => state.NowPlayingMovie);
    const [current, setCurrent] = useState(0);
    const length = nowPlaying.length;
    const timeout = useRef(null);

    useEffect(() => {
        const fetchAPI = async () => {
            dispatch(GetNowPlayingMovie())
        }
        fetchAPI();
    }, [])

    useEffect(
        () => {
            const nextSlide = () => {
                setCurrent(current => (current === length - 1 ? 0 : current + 1));
            };

            timeout.current = setTimeout(nextSlide, 5000);

            return function () {
                if (timeout.current) {
                    clearTimeout(timeout.current);
                }
            };
        },
        [current, length]
    );

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent(current === length - 1 ? 0 : current + 1);

        // console.log(current);
    };

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent(current === 0 ? length - 1 : current - 1);
        // console.log(current);
    };

    if (!Array.isArray(nowPlaying) || nowPlaying.length <= 0) {
        return null;
    }

    const fadeAnimation = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
        exit: { opacity: 0 }
    };

    const posterUrl = 'https://image.tmdb.org/t/p/original/';

    return (
        <HeroSection>
            <HeroWrapper>
                <AnimatePresence>
                    {nowPlaying.data.map((item, index) => {
                        return (
                            <HeroSlide key={index}>
                                {index === current && (
                                    <HeroSlider>
                                        <HeroImage
                                            src={posterUrl + item.backPoster}
                                            alt={item.title}
                                            initial='hidden'
                                            animate='visible'
                                            exit='exit'
                                            variants={fadeAnimation}
                                        />
                                        <HeroContent>
                                            <h1 data-aos='fade-down' data-aos-duration='600'>
                                                {item.title}
                                            </h1>
                                            <p
                                                data-aos='fade-down'
                                                data-aos-duration='600'
                                                data-aos-delay='200'
                                            >
                                                {item.overview.slice(0, 200)}...
                                            </p>
                                            <p>{item.trailer}</p>

                                            <Link className="slide-button" to={`/movie/${item.id}`} >See Detail</Link>
                                        </HeroContent>
                                    </HeroSlider>
                                )}
                            </HeroSlide>
                        );
                    })}
                </AnimatePresence>
                <SliderButtons>
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Slider
