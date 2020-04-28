import React, {Component} from 'react';
import MyNewsCard from './MyNewsCard';

class NewsAPI extends Component {
    render() {
        return (
            <MyNewsCard articles={this.state.articles} />
        )
    }

    state = {
        articles: []
    };

    componentDidMount() {
        fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
            //
            //.then(res => res.text())          // convert to plain text
           // .then(text => console.log('sttt' + text))  // then log it out
            .then(res => res.json())
            .then((data) => {
                this.setState({ articles: data })
            })
            .catch(console.log)
    }
}

export default NewsAPI;


