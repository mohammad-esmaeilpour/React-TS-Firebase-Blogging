import { useReducer } from "react";
import { fetchingReducer } from "src/reducers/fetchingReducer";
import { updateUser } from "src/services/user/updateUser";
import { fetchingStates } from "src/states/states";
import { TUser } from "src/types/user";
import { successToast, errorToast } from "src/utils/Toast";

export const useUpdateUser = (user: TUser) => {
  const [state, dispatch] = useReducer(fetchingReducer<TUser>, fetchingStates<TUser>());

  const submitUpdateUser = async (newImg: string) => {
    dispatch({ type: "PENDING" });
    try {
      await updateUser({
        userId: user.id,
        updateData: { img: newImg },
      });
      successToast("User profile updated successfully");
      // dispatch({ type: "SUCCESS", payload: state.data as TUser });
    } catch (error) {
      dispatch({ type: "ERROR", payload: "Failed to update user profile" });
      errorToast("Failed to update user profile");
    }
  };

  return { state, dispatch, submitUpdateUser };
};
