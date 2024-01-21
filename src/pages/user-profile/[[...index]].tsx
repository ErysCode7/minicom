import { UserProfile } from '@clerk/nextjs';
import React from 'react';

const ProfilePage = () => (
  <div className="flex items-center justify-center w-full py-10">
    <UserProfile path="/user-profile" routing="path" />
  </div>
);

export default ProfilePage;
