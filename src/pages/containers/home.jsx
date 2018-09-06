import React, { Component} from 'react';
import HomeLayout from '../components/home-layout.jsx'
import Categories from '../../categories/components/categories.jsx'
import Related from '../components/related.jsx'

class Home extends Component{
    render(){
        return (
            <HomeLayout>
                <Related/>
                <Categories categories={this.props.data.categories} />
            </HomeLayout>
        )
    }
}

export default Home;