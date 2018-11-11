import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


const api=() => ({
    "state": "CA",
    "qty": "100 lbs",
    "productType": "Hemp",
    "date": "03-15-19",
    "quality": "thc < 0.3%",
    "collateral": "103",
    "buyerName": "Andy Smith",
    "tokenAmount": "100",
});

class App extends React.Component {

  state = {
    state: undefined,
    productType: undefined,
    qty: undefined,
    date: undefined,
    quality:  undefined,
    collateral: undefined,
    buyerName: undefined,
    tokenAmount: undefined,
    error: undefined
  }

  getWeather = async(e) => {
    e.preventDefault()



const data = api();
const state = "CA";
if (state) {
  this.setState ({
    state: data.state,
    qty: data.qty,
    productType: data.toCurrency,
    date: data.date,
    quality: data.quality,
    collateral: data.collateral,
    buyerName: data.buyerName,
    tokenAmount: data.tokenAmount,
    error: ""
  })
}
else
{
  this.setState({ 

    state: undefined,
    qty: undefined,
    productType: undefined,
    buyerName: undefined,
    date: undefined,
    quality: undefined,
    collateral: undefined,
    tokenAmount: undefined,
    error: "Please enter the values."
  });
}
  }
render () 
  {
    const data = api();
    console.log(data);
  return (
  <div>
            <div className = "container">
                <div className = "row">
                <div className = "col-lg-12">
                <div className = "col-lg-6 title-container gutter">
                <Titles/>
                </div>
                <div className = "col-lg-6 form-container gutter">
                    <Form getWeather={this.getWeather}/> 
                    <Weather 
                    state={this.state.state}
                    productType={this.state.productType}
                    qty={this.state.qty}
                    date={this.state.date}
                    quality={this.state.quality}
                    collateral={this.state.collateral}
                    buyerName={this.state.buyerName}
                    tokenAmount={this.state.tokenAmount}
                    error={this.state.error}
                />

                    </div>
                </div>
                </div>
            </div>
        </div>
         );
    }
 }

export default App;
