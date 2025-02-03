import { limit, orderBy, where } from "firebase/firestore";
import { useParams } from "react-router";
import { Fragment, useRef } from "react";
import { BlogFullList, BlogFullListRef } from "src/components/shared/Blog/BlogFullList";
import { BlogFullListHeader } from "src/components/shared/Blog/BlogFullListHeader";
import UploadUserProfile from "./_components/UploadUserProfile";
import { useUpdateUser } from "src/hooks/user/useUpdateUser";
import { useReadUser } from "src/hooks/user/useReadUser";
import UpdatePassword from "./_components/UpdatePassword";

const Profile = () => {
  const params = useParams();

  const ref = useRef<BlogFullListRef>(null);

  const { state: userState } = useReadUser(params.uid!);
  
  const { dispatch, state, submitUpdateUser } = useUpdateUser(userState?.data!);

  return (
    <Fragment>
      <div className="bg-white">
        <div className="p-10 gap-20 flex flex-col max-w-[1440px] mx-auto items-center">
          <UploadUserProfile submitProfile={submitUpdateUser} dispatch={dispatch} state={state} />
          <UpdatePassword />
        </div>
      </div>

      <div className="py-4 border-b bg-white px-10 z-10">
        <BlogFullListHeader
          searchQuery={ref.current?.searchQuery!}
          setFilteredBlogs={ref.current?.setFilteredBlogs!}
          setSearchQuery={ref.current?.setSearchQuery!}
        />
      </div>

      <BlogFullList
        ref={ref}
        filterQuery={[orderBy("create_time", "desc"), limit(6), where("user_id", "==", params.uid)]}
      />
    </Fragment>
  );
};

export default Profile;
