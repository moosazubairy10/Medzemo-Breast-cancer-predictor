import React from "react";
import { Button } from "reactstrap";

import { auth } from "../firebase";

const SignOutButton = () => (
  <Button color="warning" onClick={auth.doSignOut}>
    Sign Out
  </Button>
);

export default SignOutButton;
