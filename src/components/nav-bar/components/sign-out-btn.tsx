import { ROUTES } from '@/utils/constants';
import { UserButton } from '@clerk/nextjs';
import React from 'react';

const SignOutButton = () => {
  return (
    <div>
      <UserButton afterSignOutUrl={ROUTES.HOME} />
    </div>
  );
};

export default SignOutButton;
