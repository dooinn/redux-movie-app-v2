import {

    PERSON_SEARCH_REQUEST,
    PERSON_SEARCH_SUCCESS,
    PERSON_SEARCH_FAIL,

    PERSON_DETAIL_REQUEST,
    PERSON_DETAIL_SUCCESS,
    PERSON_DETAIL_FAIL,

    PERSON_CREDITS_REQUEST,
    PERSON_CREDITS_SUCCESS,
    PERSON_CREDITS_FAIL,
} from '../constants/personConstants'


export const SearchPersonReducer = (state = { loading: false, data: [], error: "" }, action) => {
    switch (action.type) {
        case PERSON_SEARCH_REQUEST:
            return { ...state, loading: true, error: "" };
        case PERSON_SEARCH_SUCCESS:
            return { ...state, loading: false, data: action.payload.results, error: "" };
        case PERSON_SEARCH_FAIL:
            return { ...state, loading: false, error: "Unable to fetch data" }
        default:
            return state
    }
}

export const PersonDetailReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case PERSON_DETAIL_REQUEST:
            return { loading: true };
        case PERSON_DETAIL_SUCCESS:
            return { loading: false, person: action.payload };
        case PERSON_DETAIL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state
    }
}

export const PersonCreditsReducer = (state = { lading: false, data: [], error: "" }, action) => {
    switch (action.type) {
        case PERSON_CREDITS_REQUEST:
            return { ...state, loading: true, error: "" };
        case PERSON_CREDITS_SUCCESS:
            return { ...state, loading: false, data: action.payload, error: "" };
        case PERSON_CREDITS_FAIL:
            return { ...state, loading: false, error: "Unable to fetch Data" }
        default:
            return state
    }
}