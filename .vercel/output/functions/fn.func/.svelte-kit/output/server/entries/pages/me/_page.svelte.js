import { s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, f as add_attribute } from "../../../chunks/ssr.js";
import { a as authUser } from "../../../chunks/authStore.js";
import "../../../chunks/firebase.js";
import "firebase/auth";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authUser, $$unsubscribe_authUser;
  $$unsubscribe_authUser = subscribe(authUser, (value) => $authUser = value);
  $$unsubscribe_authUser();
  return `<div class="container"><h1>Hello, ${escape($authUser?.displayName || "Name not found")}</h1> <img${add_attribute("src", $authUser?.photoURL, 0)}${add_attribute("alt", `photo of {${$authUser?.displayName}}`, 0)}> <button data-svelte-h="svelte-8hcv9t">Log out</button></div>`;
});
export {
  Page as default
};
