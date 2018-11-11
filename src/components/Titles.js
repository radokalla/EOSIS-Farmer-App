import React from "react";
class Titles extends React.Component {
    render () {
        return (
            <div>
              <h1 className="title-container__title">Global Cooperative</h1>
              <p className="title-container__subtitle">
              Efficient Exchange for Local Goods
              </p>
              <p className="title-container__subtitle">
              Please enter: Location, Product Type, Quantity, Delivery Date, Quality Levels, Offering price (# of Tokens)

<br />Recieve back: Buyer Name and Confirmed Token Amount
              </p>
            </div>
        )
    }
};
export default Titles;
