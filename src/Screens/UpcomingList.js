import React, { useState, useRef, useCallback, useEffect } from "react";
import useUpcoming from "../hooks/useUpcoming";
import { Section } from '../styles/ListStyle'

const UpcomingList = () => {

    const [pageNum, setPageNum] = useState(1);
    const { isLoading, error, movies, hasMore } = useUpcoming(pageNum);

    const observer = useRef();
    const lastMovieElementRef = useCallback(
        (node) => {
            if (isLoading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPageNum((prev) => prev + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [isLoading, hasMore]
    );

    return (
        <Section>
            <h1>Upcoming Movie List</h1>
            <div>
                <div className="movie-grid">
                    {movies.map((movie, i) => {
                        if (movies.length === i + 1) {
                            return (
                                <div key={i} ref={lastMovieElementRef}>
                                    {movie}
                                </div>
                            );
                        } else {
                            return <div key={i}>{movie}</div>;
                        }
                    })}
                </div>
                <div>{isLoading && "Loading..."}</div>
                <div>{error && "Error..."}</div>
            </div>

        </Section>
    );
}

export default UpcomingList

