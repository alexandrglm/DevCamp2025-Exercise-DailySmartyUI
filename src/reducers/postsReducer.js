// De 10-210 API GET

import { SET_RECENT_POSTS, SET_RESULTS_POSTS } from "../actions/types";
import resultsPosts from "../components/resultsPosts";

const INIT_STATE = {

    //posts: [],
    resultsPosts: [],
    recentPosts: []

}

export default function( state= INIT_STATE, action ) {

    switch( action.type ){

        case SET_RECENT_POSTS:

            // De 10-211, Fixing Posts reducers
            const recentPosts = action.payload
            return {
                ...state,
                recentPosts: action.payload
            }

        case SET_RESULTS_POSTS:

        const resultsPosts = action.payload
        return {
            ...state,
            resultsPosts
        }

        default:
            return state;

    }
}