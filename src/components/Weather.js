import React from "react";
const Weather = props => (
	<div className="weather__info ">
	 {	
	 	<p className="weather__key"> Buyer Name: 
	 		<span className="weather__value"> { props.buyerName}</span>
	 	</p> 
	 }
 {	
	 	<p className="weather__key"> Confirmed Token Amount: 
	 		<span className="weather__value"> { props.tokenAmount}</span>
	 	</p> 
	 }

	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>

);

export default Weather;