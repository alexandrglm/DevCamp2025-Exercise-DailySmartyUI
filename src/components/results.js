// De 10-207
import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from '../actions'


import Logo from "./logo";
import SearchBar from "./searchBar";
import ResultsPosts from "./resultsPosts";


class Results extends Component {

    handleSearchbarSubmitQuery(query) {

        //console.log('[DEBUG 10-216] -> RESULTS.JS handle submit for a query:', query)
        this.props.fetchPostsWithQuery(query) // No necesita callback en este caso (guia 10-222)


    }

    render() {

        return(

            <div>
                <h1> Results:</h1>
                <Logo size={150} />
                <SearchBar 
                    page="results" 
                    onSubmit={ query => {
                        this.handleSearchbarSubmitQuery(query)
                    }}
                />
                <ResultsPosts /> {/* No lo he rendereizado durante todo el ejercicio y las 100mil vueltas que he dado para entenerlo era por esta tontería, incluso siendo consciente que el import sí lo tenái hecho */}
            </div>

        )

    }

}

export default connect(null, actions)(Results)