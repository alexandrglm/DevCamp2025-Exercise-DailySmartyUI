// De 10-210 API GET

import { SET_RECENT_POSTS } from "../actions/types";

const INIT_STATE = {

    posts: [],
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

        default:
            return state;

    }
}