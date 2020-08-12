import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";
import { iState, iCar, iFeature } from "./reducers";

type iAppProps = {
  car: iCar;
  additionalFeatures: Array<iFeature>;
  additionalPrice: number
}

const App = (props: iAppProps) => {
  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

function mapStateToProps(state: iState) {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
  };
}

export default connect(mapStateToProps, {})(App);
