import React from "react";
import { addNewFeatureToCar, iAction } from "../actions";
import { connect } from "react-redux";
import { iFeature } from "../reducers";

type iAdditionalFeatureProps = {
  addNewFeatureToCar(feature: iFeature): iAction;
  feature: iFeature;
};

const AdditionalFeature = (props: iAdditionalFeatureProps) => {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    props.addNewFeatureToCar(props.feature);
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleClick}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(() => {}, { addNewFeatureToCar })(AdditionalFeature);
