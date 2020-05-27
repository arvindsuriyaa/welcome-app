import { IS_LOADING } from "../types/app";

const initialState = {
  isLoading: true,
  isEdit: false,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case IS_LOADING:
      return { ...state, isLoading: payload };
    default:
      return state;
  }
}
