import React, {Component} from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';

export const CustomEditConfig = {

    emptyLabel: 'Author',   

    isEmpty : function(props) {
        
        return !props || !props.firstName || props.firstName.trim().length < 1;
    }

};

export default class Author extends Component{

    render() {
        if(CustomEditConfig.isEmpty(this.props))
        {
            return null;
        }

        return (
            <div>
                <h2>{this.props.firstName}</h2>
                <h4>{this.props.lastName}</h4>
                <h4>{this.props.isProfessor}</h4>
            </div>
        );
    }
}
MapTo('dp-headless/components/author')(Author,CustomEditConfig);