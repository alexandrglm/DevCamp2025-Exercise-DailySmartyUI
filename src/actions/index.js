// De 10-209

//de 10-210 -> API GET guide
import axios from 'axios'


import { SET_RECENT_POSTS, SET_RESULTS_POSTS } from './types.js'


export function fetchRecentPosts()  {

    return function(dispatch) {
        //console.log('[API COMPONENT, ACTION fetchRecentPosts()] -> ', dispatch)
        // GET
        axios.get('http://localhost:3001/posts')
            .then( response =>{
                
                console.log('[DEBUG AXIOS GET] API GET response: ', response.data ),
                dispatch({
                    type: SET_RECENT_POSTS,
                    payload: response.data
                })
            })
    }
}

export function fetchPostsWithQuery(query, callback){

    return function(dispatch){

        axios.get(`http://localhost:3001/posts?title_like=${query}`)
            .then( response =>{
                console.log('[DEBUG 10-217 -> API GET QUERY RESPONSE]: ', response)

                dispatch({

                    type: SET_RESULTS_POSTS,
                    payload: response.data

                })

                if ( callback ){

                    callback()
                
                }

            })

    }

}