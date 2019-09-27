import React,{Component} from 'react';
import axios  from 'axios';
import {Link} from 'react-router-dom'

class News extends Component{
    state = {
        news : []
    }
    componentDidMount(){
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=758408cb6dfb4274900a65a6469e966a')
        .then(res => {
            this.setState({
                news : res.data.articles
            })
            console.log(res);
        })
    }
    render(){
        const { news } = this.state;
        const newsList = news.length ? (
            news.map(res =>{
                return(
                    <div className="card">
                        <div className="card-content">
                            <Link to = {res.url}>
                            <span className="card-title">{res.title}</span>
                            </Link>
                            <p>{res.description}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">
                News Loading...
            </div>
        )
        
        return(
            <div className="container">
                <h3>Welcome to the news App!</h3>
                {newsList}
            </div>
        )
    }
}
export default News;