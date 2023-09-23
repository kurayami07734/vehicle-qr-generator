import { a as authUser } from "../../../chunks/authStore.js";
import { r as redirect } from "../../../chunks/index.js";
const load = async () => {
  const unsubscribe = authUser.subscribe((user) => {
    if (!user) {
      throw redirect(302, "/login");
    }
  });
  unsubscribe();
  return {};
};
export {
  load
};
