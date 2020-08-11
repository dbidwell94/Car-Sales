import React from "react";
import { connect } from "react-redux";
import { iFeature, iState } from "../reducers";
import { removeFeatureFromCar, iAction } from "../actions";

type iAddedFeatureProps = {
  removeFeatureFromCar(feature: iFeature): iAction;
  feature: iFeature;
};

const AddedFeature = (props: iAddedFeatureProps) => {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    props.removeFeatureFromCar(props.feature);
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleClick}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

function mapStateToProps(state: iState) {
  return {};
}

export default connect(mapStateToProps, { removeFeatureFromCar })(AddedFeature);
