import React, {Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import CostFilter from '../filter/costFilter';
import CusineFilter from '../filter/cuisineFilter';


const lurl="http://localhost:8900/restaurant?mealtype=";

class Listing extends Component{
    constructor(props){
        super(props)

        this.state={
            restListing:''
        }
    }

    setDataPerFilter(sortedData){
        this.setState({restListing:sortedData})
    }

    render(){
        console.log(this.props.match.params.id)
        return(
            <div>
                <div className="row">
                    <div className="col-md-2">
                    <CusineFilter mealIdNumber={this.props.match.params.id} restpercuisine={(data) => {this.setDataPerFilter(data)}}/>
                        <CostFilter restpercost={(data) => {this.setDataPerFilter(data)}} mealIdNumber={this.props.match.params.id}/>
                    </div>
                    <div className="col-md-10">
                        <ListingDisplay restdata={this.state.restListing}/>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        var mealId=this.props.match.params.id;
        sessionStorage.setItem('type',mealId);
        axios.get(`${lurl}${mealId}`)
        .then((response) => {this.setState({restListing:response.data})})
    }
}

export default Listing;