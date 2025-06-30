import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideos: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,

    },
    reducers: {
        addTrailerVideos : (state, action) => {
            state.trailerVideos = action.payload;
        },
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTopRatedMoives: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
    }
});

export const {addNowPlayingMovies, addTrailerVideos, addPopularMovies, addTopRatedMoives, addUpcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;