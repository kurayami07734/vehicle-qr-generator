

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.284523a4.js","_app/immutable/chunks/scheduler.c40b2f4b.js","_app/immutable/chunks/index.4412939c.js"];
export const stylesheets = ["_app/immutable/assets/0.cb2ce4d5.css"];
export const fonts = [];
