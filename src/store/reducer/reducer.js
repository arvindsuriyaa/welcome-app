const initialState = {
    isLoading:true,
    isEdit:false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_DATA":
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
};
