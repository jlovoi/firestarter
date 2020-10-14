import { sagas as usersSagas } from "./users/";

const { fetchAllUsers } = usersSagas;

export default [fetchAllUsers];
