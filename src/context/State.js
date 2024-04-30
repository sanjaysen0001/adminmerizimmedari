import React, { useEffect, useState } from "react";
import UserContext from "./Context";
import {
  CreateAccountView,
  CurrencyConvertor,
  ViewCompanyDetails,
} from "../ApiEndPoint/ApiCalling";

const State = (props) => {
  const [user, setUser] = useState("Jesse Hall");

  useEffect(() => {}, []);

  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default State;
