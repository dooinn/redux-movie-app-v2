import { combineReducers } from 'redux';
import {
    NowPlayingMovieReducer,
    SearchMovieReducer,
    PopularMovieReducer,
    TopRatedMovieReducer,
    LatestMovieReducer,
    DetailMovieReducer,
    MovieVideoReducer,
    MovieCastsReducer,
    SimilarMovieReducer,
    FavoriteMovieReducer,

} from './movieReducer'

import {
    PersonDetailReducer,
    PersonCreditsReducer,
    SearchPersonReducer
} from './personReducer'

const RootReducer = combineReducers({
    NowPlayingMovie: NowPlayingMovieReducer,
    SearchMovie: SearchMovieReducer,
    PopularMovie: PopularMovieReducer,
    TopRatedMovie: TopRatedMovieReducer,
    LatestMovie: LatestMovieReducer,
    DetailMovie: DetailMovieReducer,
    MovieVideo: MovieVideoReducer,
    MovieCasts: MovieCastsReducer,
    SimilarMovie: SimilarMovieReducer,
    FavoriteMovie: FavoriteMovieReducer,
    PersonDetail: PersonDetailReducer,
    PersonCredits: PersonCreditsReducer,
    SearchPerson: SearchPersonReducer



});

export default RootReducer;