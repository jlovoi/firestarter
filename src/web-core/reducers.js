import { combineReducers } from "@reduxjs/toolkit";

import { reducer as users } from "./users";

export default combineReducers({
  users
});
