// De 10-218
import React, { Component } from "react";
import { connect } from "react-redux";

import Post from './post.js'

class ResultsPosts extends Component {

    //De 10-220
    renderPosts() {

        const posts = this.props.posts.map( (post, index) =>{

            return <Post type="results" key={index} {...post} />

        } )

        return posts

    }


    render() {

        return(
            <div className="results-posts">
                <div className="results-posts__wrapper">

                    <ul className="results-posts__posts">
                        {this.renderPosts()}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){

    return {
        
        props: state.props.resultsPosts

    }
}

export default connect(mapStateToProps)(ResultsPosts)