// De 10-209
//de 10-210 -> API GET guide
import axios from 'axios'
import { SET_RECENT_POSTS, SET_RESULTS_POSTS } from './types.js'

const API_URL = process.env.REACT_APP_API_URL

// DEBUG HEROKU ES UNA PUTA MIERDA
console.log('=== ENV DEBUG ===');
console.log('[DEBUG] process.env.REACT_APP_API_URL:', process.env.REACT_APP_API_URL);
console.log('[DEBUG] API_URL value:', API_URL);
console.log('[DEBUG] typeof API_URL:', typeof API_URL);
console.log('=================');

// Y, COMO HEROKU APESTA, NECESITO ESTO
if (!API_URL || API_URL === 'undefined') {
    
    console.error('[ERROR] API_URL is not defined! Check Heroku config vars.');
    alert('ERROR: API_URL is not defined! Check your environment variables.');

}

export function fetchRecentPosts() {

    return function(dispatch) {
        
        const fullUrl = `${API_URL}/posts`;

        console.log('[fetchRecentPosts] Full URL:', fullUrl);
        
        axios.get(fullUrl)
            .then(response => {
                
                console.log('[DEBUG AXIOS GET] Response type:', typeof response.data);
                console.log('[DEBUG AXIOS GET] Is Array?:', Array.isArray(response.data));
                console.log('[DEBUG AXIOS GET] API GET response:', response.data);
                
                dispatch({
                    type: SET_RECENT_POSTS,
                    payload: response.data
                })
            })
            .catch(error => {
                
                console.error('[fetchRecentPosts] ERROR:', error);
                console.error('[fetchRecentPosts] Error response:', error.response);
           
            })
    }
}

export function fetchPostsWithQuery(query, callback) {
    
    return function(dispatch) {
        
        const fullUrl = `${API_URL}/posts?title_like=${query}`;
        
        console.log('[fetchPostsWithQuery] Full URL:', fullUrl);
        console.log('[fetchPostsWithQuery] Query:', query);
        
        axios.get(fullUrl)
        
            .then(response => {
            
                console.log('[DEBUG 10-217] Response type:', typeof response.data);
                console.log('[DEBUG 10-217] Is Array?:', Array.isArray(response.data));
                console.log('[DEBUG 10-217 -> API GET QUERY RESPONSE]:', response);
                
                dispatch({
                    type: SET_RESULTS_POSTS,
                    payload: response.data
                })
                
                if (callback) {
                    callback()
                }
            })
            .catch(error => {
            
                console.error('[fetchPostsWithQuery] ERROR:', error);
                console.error('[fetchPostsWithQuery] Error response:', error.response);
            
            })
    }
}