// De 10-204

import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'

// De 10-207 - 10-208
import { withRouter } from 'react-router-dom'



class SearchBar extends Component {

    handleFormSubmission = function( {query} ) {

        //console.log('[DEBUG REDUX-FORM] -> Handle submit for query: ', query)

        this.props.history.push('/results')

    }

    renderInput(field) {

        return <input
                    placeholder="&#xf002; Search DailySmarty"
                    type='text' 
                    {...field.input}
                />

    }


    render() {

        const { handleSubmit } = this.props

        return (

            <form
                className={ ` search-bar search-bar__${this.props.page} `   }
                onSubmit={handleSubmit( this.handleFormSubmission.bind(this) )}
            >
                <div className='seach-bar__wrapper'>
                    <Field name='query' component={this.renderInput} />
                    <p>Press return to search something</p>

                </div>



            </form>
        )


    }

}

// De10-205 -> Aqui es donde conectamos todo con redux-form

// 10-208
// 1. Redux from HOC
SearchBar = reduxForm({
    form: 'searchBar'

})(SearchBar);

SearchBar = withRouter(SearchBar)

// 2. Router HOC
export default SearchBar;
