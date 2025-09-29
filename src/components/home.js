import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './searchBar';
import RecentPosts from './recentPosts';



export default class Home extends Component {

  handleSearchBarSubmit(query) {

    //console.log('[DEBUG 10-216] -> HOME.JS handle submit for a query:', query)
    this.props.fetchPostsWithQuery(query, ()=> {

      this.props.history.push('/results')

    })


  }
  
  render() {
   
    return (
    
      <div >

        <Logo size={200}/>
        <SearchBar
          osSubmit={ (query) => { this.handleSearchBarSubmit(query) } }
        />
        <RecentPosts />
    
      </div>
    
    );
  }
}
