import { iAction } from "../actions";

type iFeature = {
  id: number;
  name: string;
  price: number;
};

type iCar = {
  price: number;
  name: string;
  image: string;
  features: Array<iFeature>;
};

type iState = {
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
    default:
      return state;
  }
}
