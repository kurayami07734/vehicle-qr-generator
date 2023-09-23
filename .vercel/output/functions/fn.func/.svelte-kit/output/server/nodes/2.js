

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.52759aff.js","_app/immutable/chunks/scheduler.c40b2f4b.js","_app/immutable/chunks/index.4412939c.js"];
export const stylesheets = [];
export const fonts = [];
