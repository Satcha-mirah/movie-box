// "use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { getMovieList, setMovieList } from "@/store/slice";
import { useDispatch, useSelector } from "react-redux";

export default function MovieList(props) {
    // const [movieData, setMovieData] = useState([]);
    const [hasFetched, setHasFetched] = useState(false);
    const [cantFetch, setCantFetch] = useState(false);

    const dispatch = useDispatch();


    const movies = useSelector((state) => state.app.movieList);
    console.log(movies);

    useEffect(async () => {
        // let url =
        //     "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

        const fetchTopMovies = async () => {
            const response = await getMovieList();
            console.log(response);

            setHasFetched(true);
            setCantFetch(false);
            // setMovieData(response.results);
            dispatch(setMovieList(response.results));
        };

        fetchTopMovies();
    }, []);

    // const movieCardEls = movieData.slice(0, 10).map((data) => {
    const movieCardEls = movies.slice(0, 10).map((data) => {
        return (
            <MovieCard
                id={data.id}
                title={data.title}
                path={data.poster_path}
                key={data.id}
                genreId={data.genre_ids}
                date={data.release_date}
                rating={data.vote_average}
            />
        );
    });

    return (
        <div className="flex flex-col w-[100%] gap-16 items-center">
            <div className="flex justify-between w-[80%]">
                <h3 className="text-4xl font-bold">Featured Movies</h3>

                <p className="text-mainRed cursor-pointer">
                    See more <span className="font-bold">{">"}</span>
                </p>
            </div>

            {cantFetch ? (
                <div className="text-lg">
                    Something went wrong, check your network connection...
                </div>
            ) : (
                ""
            )}

            <div className={` movie-list grid relative`}>
                <img
                    src="/images/loader.gif"
                    className={`${
                        hasFetched ? "hidden" : "block"
                    } absolute top-[0%] left-[50%] translate-x-[-50%]`}
                    alt=""
                />
                {hasFetched ? movieCardEls : ""}
            </div>
            {hasFetched ? props.children : ""}
        </div>
    );
}
