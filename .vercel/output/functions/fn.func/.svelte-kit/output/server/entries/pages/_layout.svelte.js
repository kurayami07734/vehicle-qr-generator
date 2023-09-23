import { c as create_ssr_component } from "../../chunks/ssr.js";
const pico_min = "";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-1n6a1em{margin:1rem}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="svelte-1n6a1em" data-svelte-h="svelte-geb3pk"><ul><li><strong>Vehicle QR codes</strong></li></ul> <ul class="nav-links"><li>Generate</li> <li>Scan</li> <li><a href="/sign-in">Sign in</a></li></ul></nav> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
