import { iFeature } from "../reducers";

export type iType = "ADD_NEW_FEATURE_TO_CAR" | "REMOVE_FEATURE_FROM_CAR";

export type iAction = {
  type: iType;
  payload: any;
};

function dispatchAction(type: iType, payload: any): iAction {
  return {
    type: type,
    payload: payload,
  };
}

export function addNewFeatureToCar(featureToAdd: iFeature): iAction {
  return dispatchAction("ADD_NEW_FEATURE_TO_CAR", featureToAdd);
}

export function removeFeatureFromCar(featureToRemove: iFeature): iAction {
  return dispatchAction("REMOVE_FEATURE_FROM_CAR", featureToRemove);
}
