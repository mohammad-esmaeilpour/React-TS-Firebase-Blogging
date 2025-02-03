import { CheckmarkCircle02Icon } from "hugeicons-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import Input from "src/components/form/Input";
import { useReadUser } from "src/hooks/user/useReadUser";

const UpdatePassword = () => {
  const params = useParams();
  const {
    formState: { errors },
    register,
    setValue,
  } = useForm();

  const user = useReadUser(params.uid!);

  useEffect(() => {
    setValue("email", user.state.data?.email);
  }, [user]);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h2 className="mt-10 mb-16">User Information</h2>
        <button className="btn btn-primary btn-sm">
          Update Inforamtion <CheckmarkCircle02Icon color="#4a00ff" fill="white" />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5 w-full flex-1">
        <Input
          register={register}
          input={{
            label: "First Name",
            name: "first_name",
            pattern: {
              value: /^/,
              message: "",
            },
            placeholder: "type first name here",
            required: {
              message: "",
              value: true,
            },
            type: "password",
          }}
          errors={errors}
        />

        <Input
          register={register}
          input={{
            label: "Last Name",
            name: "last_name",
            pattern: {
              value: /^/,
              message: "",
            },
            placeholder: "type last name here",
            required: {
              message: "",
              value: false,
            },
            type: "text",
          }}
          errors={errors}
        />
        <Input
          register={register}
          input={{
            label: "Email",
            name: "email",
            pattern: {
              value: /^/,
              message: "",
            },
            placeholder: "",
            required: {
              message: "",
              value: true,
            },
            type: "password",
          }}
          errors={errors}
        />
      </div>
    </div>
  );
};

export default UpdatePassword;
