import React from "react";
import { UserProfile } from "@clerk/clerk-react";

const Profile = () => {
  return (
    <div className="flex items-center justify-center h-dvh">
      <UserProfile />
    </div>
  );
};

export default Profile;
