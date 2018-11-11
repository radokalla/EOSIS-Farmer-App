import React from "react";
class Titles extends React.Component {
    render () {
        return (
            <div>
              <h1 className="title-container__title">Global Cooperative</h1>
              <p className="title-container__subtitle">
              Efficient Exchange for Local Commodities
              </p>
              <p className="title-container__subtitle">
              Enter your State, Commodity Type, Quantity, Delivery Date, THC Level, Collateral # of Tokens
               and receive back Buyer Name and Confirmed Token Amount
              </p>
            </div>
        )
    }
};
export default Titles;
