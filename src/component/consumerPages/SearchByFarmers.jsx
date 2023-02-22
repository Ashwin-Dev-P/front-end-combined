import React, { Component } from 'react'
import FarmerItem from '../components/FarmerItem';
import ConsumerNavbar from "./ConsumerNavbar"
export default class SearchByFarmers extends Component {

    constructor(props){
        super(props);

        this.state = {
            farmers:[],
        }
    }

    componentDidMount(){
this.getFarmers();
    }

    getFarmers(){
        
    //const location = document.getElementById("location").value;
    const url = process.env.REACT_APP_BACKEND_URL + "/api/user/farmers";

    

      fetch(url, {
        method: "GET",
        headers: { "content-type": "application/json" }
      })
        .then((res) => {
          
          return res.json();
        })
        .then((res=>{
          console.log(res)
          if(res.status === 200){
            this.setState({
                farmers: res.farmers,
            })
          }
        }))
    }
  render() {
    return (
      <div>
        <ConsumerNavbar />
        <div className="container">
            <div><h1 className='text-center my-4'>Select your farmer</h1></div>
          <div className="row ">
            
            {this.state.farmers.map((product) => {
              return <FarmerItem key={product._id} farmer={product} />;
            })}
          </div>
        </div>
      </div>
    )
  }
}
