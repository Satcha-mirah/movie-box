import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    movieList: [],
    movieSearch: {},
    movieDetails: {},
};

export const getMovieList = async () => {
    try {
        const response = await axios.get(
            "https://api.themoviedb.org/3/movie/top_rated",
            {
                params: {
                    language: "en-US",
                    page: 1,
                },
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_LIST_TOKEN}`,
                },
            }
        )
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getMovieSearch = async () => {
    try {
        const response = await axios.get(
            "https://api.themoviedb.org/3/genre/movie/list",
            {
                params: {
                    language: "en-US",
                    page: 1,
                },
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_LIST_TOKEN}`,
                },
            }
        )
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getMovieDetails = async () => {
    try {
        const response = await axios.get(
            "https://api.themoviedb.org/3/genre/movie/list",
            {
                params: {
                    language: "en-US",
                    page: 1,
                },
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_LIST_TOKEN}`,
                },
            }
        )
        return response.data;
    } catch (error) {
        console.log(error);
    }
};








const appSlice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        setMovieList: function (state, action) {
            state.movieList = action.payload;
        },
        setMovieSearch: function (state, action) {
            state.movieSearch = action.payload;
        },
        setMovieDetails: function (state, action) {
            state.movieDetails = action.payload;
        },
    },
});

export const { setMovieList, setMovieSearch, setMovieDetails } =
    appSlice.actions;
export default appSlice.reducer;
