import { Delete02Icon, Edit02Icon, PlusSignIcon } from "hugeicons-react";
import { ChangeEvent, Dispatch } from "react";
import { TFetchingAction } from "src/types/actions";
import { TFetchingStates } from "src/types/states";
import { TUser } from "src/types/user";
import { errorToast } from "src/utils/Toast";

type Props = {
  state: TFetchingStates<TUser>;
  dispatch: Dispatch<TFetchingAction<TUser>>;
  submitProfile: (newImg: string) => void;
};

const UploadUserProfile = ({ dispatch, state, submitProfile }: Props) => {
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const file = event.target.files?.[0];

      if (file) {
        if (file.size > 100 * 1024) {
          errorToast("File size must be less than 100KB");
          return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const newImage = reader.result;

          submitProfile(newImage as string);
        };

        reader.onerror = (error) => {
          errorToast(error instanceof Error ? error.message : "Failed to upload image");
        };
      }
    }
  };

  return (
    <div>
      {state.data?.img ? (
        <div className="flex gap-10 items-center">
          <img src={state.data?.img} alt="Preview" className=" object-cover rounded-full w-32 h-32" />
          <div className="flex flex-col gap-3">
            <div className="relative w-56 h-10">
              <label
                htmlFor="upload-banner"
                className="btn bg-gray-50 shadow-none border-gray-300 absolute start-0 top-0 w-full h-full z-10"
              >
                Change Profile Image
                <Edit02Icon size={18} />
              </label>

              <input
                id="upload-banner"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="h-full w-full opacity-0 absolute start-0 top-0"
              />
            </div>
            <button
              className="btn border-gray-300 bg-gray-50 shadow-none"
              onClick={() => dispatch({ type: "SUCCESS", payload: { ...state.data, img: null } as TUser })}
            >
              Remove Profile Image
              <Delete02Icon size={18} />
            </button>
          </div>
        </div>
      ) : (
        <div className="relative w-full rounded-xl rounded-b-none">
          <label
            htmlFor="upload-banner"
            className="w-32 h-32 mx-auto cursor-pointer border bc-gray rounded-full z-20 text-xl flex flex-col gap-5 items-center justify-center"
          >
            <PlusSignIcon size={40} color="gray" />
          </label>

          <input
            id="upload-banner"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="h-full w-full opacity-0 absolute left-0 top-0 p-0"
          />
          <span className="text-sm mt-2 block">Upload your profile picture</span>
        </div>
      )}
    </div>
  );
};

export default UploadUserProfile;
