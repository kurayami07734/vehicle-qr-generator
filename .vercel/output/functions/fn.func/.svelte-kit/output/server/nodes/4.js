import * as universal from '../entries/pages/me/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/me/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/me/+page.ts";
export const imports = ["_app/immutable/nodes/4.4ccb851a.js","_app/immutable/chunks/authStore.b53b6caa.js","_app/immutable/chunks/singletons.593b1054.js","_app/immutable/chunks/scheduler.c40b2f4b.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.4412939c.js"];
export const stylesheets = [];
export const fonts = [];
