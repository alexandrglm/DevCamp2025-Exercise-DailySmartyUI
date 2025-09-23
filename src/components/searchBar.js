// De 10-204

import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'

class SearchBar extends Component {

    handleFormSubmission( {query} ) {

        console.log('[DEBUG REDUX-FORM] -> Handle submit for query: ', query)

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
                className='search-bar' 
                onSubmit={handleSubmit( this.handleFormSubmission.bind(this) )}
            >

                <Field name='query' component={this.renderInput} />

            </form>
        )


    }

}

// De10-205 -> Aqui es donde conectamos todo con redux-form
SearchBar = reduxForm({

    form: 'searchBar'

})(SearchBar);


export default SearchBar;
