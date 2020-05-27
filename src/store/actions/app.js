import { IS_LOADING } from "../types/app";

const handleLoading = (payload) => ({
  type: IS_LOADING,
  payload: payload,
});

export { handleLoading };
