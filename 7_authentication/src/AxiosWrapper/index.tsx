import axios from "axios";
import React, { useEffect } from "react";
import { useUserContext, useUserDispatchContext } from "../UserContext";
import { api } from "../api";

type Props = {
  children: React.ReactNode;
};

const AxiosWrapper = ({ children }: Props): JSX.Element => {
  const setUser = useUserDispatchContext();

  useEffect(() => {
    api.interceptors.request.use((config) => {
      console.log("AxiosWrapperRequest", config);

      return config;
    });

    api.interceptors.response.use((response) => {
      console.log("AxiosWrapperResponse", response);

      // Refresh token if its not valid anymore

      // Redirect to login page if not authorized

      if (response.status === 401) {
        console.log("Unauthorized");

        setUser(null);
      }

      return response;
    });
  }, []);

  return <>{children}</>;
};

export default AxiosWrapper;
