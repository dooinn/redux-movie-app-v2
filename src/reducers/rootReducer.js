import { combineReducers } from 'redux';
import { NowPlayingMovieReducer, SearchMovieReducer } from './movieReducer'

const RootReducer = combineReducers({
    NowPlaying: NowPlayingMovieReducer,
    SearchMovie: SearchMovieReducer

});

export default RootReducer;