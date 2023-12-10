import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { getMovieSearch, setMovieSearch } from "@/store/slice";

export default function MovieCardSearch(props) {
    const [genreEls, setGenreEls] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);

    function getPicUrl(pic_path) {
        return `https://www.themoviedb.org/t/p/w220_and_h330_face${pic_path}`;
    }

    // useEffect(() => {
    //     const fetchGenres = async () => {
    //         try {
    //             const response = await axios.get(
    //                 "https://api.themoviedb.org/3/genre/movie/list",
    //                 {
    //                     params: {
    //                         language: "en",
    //                     },
    //                     headers: {
    //                         accept: "application/json",
    //                         Authorization: `Bearer ${process.env.NEXT_PUBLIC_SEARCH_TOKEN}`,
    //                     },
    //                 }
    //             );

    //             setGenreEls((prevEl) => {
    //                 let test = props.genreId.map((genre) => {
    //                     let obj = response.data.genres.find((genreArrObj) => {
    //                         return genreArrObj.id === genre;
    //                     });

    //                     return obj.name;
    //                 });

    //                 return test;
    //             });
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     };

    //     fetchGenres();
    // }, []);

    const dispatch = useDispatch();


    const movies = useSelector((state) => state.app.movieSearch);
    console.log(movies);

    useEffect(async () => {
        
        const fetchMovieSearch = async () => {
            const response = await getMovieSearch();
            console.log(response);

            setHasFetched(true);
            setCantFetch(false);
            dispatch(setMovieSearch(response.results));
        };

        fetchMovieSearch();
    }, []);


    return (
        <Link href={`/movies/${props.id}`}>
            <div
                data-testid="movie-card"
                className="flex items-center w-[70%] -500:w-[95%] gap-4"
            >
                {/* movie poster */}
                <div className="w-[110px] h-[150px] flex relative">
                    <img
                        className="w-[100%] min-w-[110px] h-[100%] text-black"
                        src={getPicUrl(props.path)}
                        alt="movie-poster"
                        onLoad={() => {
                            setHasLoaded(true);
                        }}
                    />

                    {/* loader for image */}
                    <div
                        src="/images/loader-run.gif"
                        className={`${
                            hasLoaded ? "hidden" : "block"
                        } h-[102%] w-[102%] bg-white flex justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}
                    >
                        <img src="/images/loader-run.gif" alt="" />
                    </div>
                </div>

                {/* movie details */}
                <div className="flex flex-col items-start">
                    {/* year of release and region */}
                    <div className="text-movieGray">
                        <span> {new Date(props.date).toUTCString()}</span>
                    </div>

                    {/* movie title */}
                    <h3 className="font-bold text-black">{props.title}</h3>

                    {/* rating */}
                    <div></div>

                    {/* movie genre */}
                    <div className="text-movieGray">{genreEls.join(", ")}</div>
                </div>
            </div>
        </Link>
    );
}
