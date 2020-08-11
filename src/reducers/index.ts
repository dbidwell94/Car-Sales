import { iAction } from "../actions";

export type iFeature = {
  id: number;
  name: string;
  price: number;
};

export type iCar = {
  price: number;
  name: string;
  image: string;
  features: Array<iFeature>;
};

export type iState = {
  additionalPrice: number;
  car: iCar;
  additionalFeatures: Array<iFeature>;
};

const initialState: iState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export default function Reducer(state = initialState, action: iAction): iState {
  switch (action.type) {
    case "ADD_NEW_FEATURE_TO_CAR":
      let featureObj = action.payload as iFeature;
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, featureObj],
        },
      };
    case "REMOVE_FEATURE_FROM_CAR":
      featureObj = action.payload as iFeature;
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter((feature) => {
            return feature.id !== featureObj.id;
          }),
        },
      };
    default:
      return state;
  }
}
