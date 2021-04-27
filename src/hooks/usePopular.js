import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";

const usePopular = (pageNum) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [movies, setMovies] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const API_KEY = '74af3496125e04547854e2abd22ebe6f';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const POSTER_URL = 'https://image.tmdb.org/t/p/original/';

    useEffect(() => {
        setMovies([]);
    }, []);

    useEffect(() => {
        const CancelToken = axios.CancelToken;
        let cancel;

        setIsLoading(true);
        setError(false);

        axios
            .get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNum}`, {
                cancelToken: new CancelToken((c) => (cancel = c))
            })
            .then((res) => {
                setMovies((prev) => {
                    return [...new Set([...prev, ...res.data.results.map((m) => {
                        return (
                            <Link to={"/movie/" + m.id} className="poster-link">
                                <img className="poster-iamge" src={POSTER_URL + m.poster_path}></img>
                            </Link>

                        )
                    })])];
                });
                setHasMore(res.data.results.length > 0);
                setIsLoading(false);
                console.log(res)
            })
            .catch((err) => {
                if (axios.isCancel(err)) return;
                setError(err);
            });

        return () => cancel();
    }, [pageNum]);

    return { isLoading, error, movies, hasMore };
}

export default usePopular;
