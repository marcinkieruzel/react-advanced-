import React, { SetStateAction } from "react";

type Props = {
  children: React.ReactNode;
};

interface UserInterface {
  id: string;
  email: string;
  username: string;
  exp: Date;
}

const UserContext = React.createContext<{
  user: null | UserInterface;
}>({
  user: null,
});

const UserDispatchContext = React.createContext<
  React.Dispatch<SetStateAction<UserInterface | null>>
>(() => {});

export const UserContextWrapper = ({ children }: Props): JSX.Element => {
  const [user, setUser] = React.useState<UserInterface | null>(null);

  return (
    <UserContext.Provider value={{ user: user }}>
      <UserDispatchContext.Provider value={setUser}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const user = React.useContext(UserContext);
  if (user === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return user;
};

export const useUserDispatchContext = () => {
  const setUser = React.useContext(UserDispatchContext);
  if (setUser === undefined) {
    throw new Error(
      "useUserDispatchContext must be used within a UserProvider"
    );
  }
  return setUser;
};
