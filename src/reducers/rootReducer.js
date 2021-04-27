import { combineReducers } from 'redux';
import {
    NowPlayingMovieReducer,
    SearchMovieReducer,
    PopularMovieReducer,
    TopRatedMovieReducer,
    UpcomingMovieReducer,
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
    UpComingMovie: UpcomingMovieReducer,
    LatestMovie: LatestMovieReducer,
    DetailMovie: DetailMovieReducer,
    MovieVideo: MovieVideoReducer,
    MovieCasts: MovieCastsReducer,
    SimilarMovie: SimilarMovieReducer,
    Favorite: FavoriteMovieReducer,
    PersonDetail: PersonDetailReducer,
    PersonCredits: PersonCreditsReducer,
    SearchPerson: SearchPersonReducer



});

export default RootReducer;