// De 10-204
import React, { Component } from "react";
import { connect } from 'react-redux'

import * as actions from '../actions';

class RecentPosts extends Component {

    componentDidMount(){

        this.props.fetchRecentPosts()

    }


    render() {

        return(

            <div className="recent-posts">

                <div className="recent-posts__wrapper">

                    <div className="recent-posts-heading">
                        Recent Posts
                    </div>

                    <ul className="recent-posts__posts" >
                        <li>REcent post 0</li>
                        <li>REcent post 1</li>
                        <li>REcent post 2</li>
                    </ul>

                </div>

            </div>

        )


    }

}

/*
ATENTO al connect syntax:

connect(mapStateToProps, mapDispatchToProps)(Component)

*/

export default  connect(null, actions)(RecentPosts);

