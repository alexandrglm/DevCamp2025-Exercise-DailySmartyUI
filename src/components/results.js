// De 10-207
import React, { Component } from "react";

import Logo from "./logo";
import SearchBar from "./searchBar";


class Results extends Component {

    handleSeacrhbarSubmitQuery(query) {

        console.log('[DEBUG 10-216] -> RESULTS.JS handle submit for a query:', query)


    }

    render() {

        return(

            <div>
                <h1> Results:</h1>
                <Logo size={150} />
                <SearchBar />
            </div>

        )

    }

}

export default Results