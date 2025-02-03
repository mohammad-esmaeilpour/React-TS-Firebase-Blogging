import { useParams } from "react-router";
import TabsLayout from "src/components/shared/TabsLayout";
import { useUpdateUser } from "src/hooks/user/useUpdateUser";
import { useReadUser } from "src/hooks/user/useReadUser";
import UploadUserProfile from "./_components/UploadUserProfile";

const ProfileSetting = () => {
  const params = useParams();

  const { state: userState } = useReadUser(params.uid!);

  const { dispatch, state, submitUpdateUser } = useUpdateUser(userState?.data!);

  return (
    <TabsLayout
      tabs={[
        { title: "Profile", link: "/profile" },
        {
          title: "Setting",
          link: "/setting",
        },
      ]}
      url={`/${params.uid}`}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="p-10 flex items-center flex-col justify-center gap-3">
          <UploadUserProfile submitProfile={submitUpdateUser} dispatch={dispatch} state={state} />
        </div>
      </div>
    </TabsLayout>
  );
};

export default ProfileSetting;
