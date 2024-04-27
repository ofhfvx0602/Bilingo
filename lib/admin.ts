import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2fX6EFwZAspA1ZF5jdcP5kbLy60",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
