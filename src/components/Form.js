import React from "react";
class Form extends React.Component {
    render () {
        return (
           <form onSubmit={this.props.getWeather}>
            <input type="text" name="state" placeholder="e.g., CA..." />
            <input type="text" name="productType" placeholder="e.g., hemp..." />
            <input type="text" name="qty" placeholder="e.g., 100 lbs." />
            <input type="text" name="date" placeholder="e.g., 03-15-19..." />
            <input type="text" name="quality" placeholder="e.g., cbd < 20% ..." />
            <input type="text" name="collateral" placeholder="e.g., 103 tokens..." />
            <button>Create Contract</button>
           </form>
        )
    }
};

export default Form;