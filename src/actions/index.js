// De 10-209

//de 10-210 -> API GET guide
import axios from 'axios'


import { SET_RECENT_POSTS } from './types.js'


export function fetchRecentPosts()  {

    return function(dispatch) {

        console.log('[API COMPONENT, ACTION fetchRecentPosts()] -> ', dispatch)

        // todo axios aqui

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