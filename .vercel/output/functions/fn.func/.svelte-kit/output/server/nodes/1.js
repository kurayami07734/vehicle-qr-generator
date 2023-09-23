

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.eaeb423e.js","_app/immutable/chunks/scheduler.c40b2f4b.js","_app/immutable/chunks/index.4412939c.js","_app/immutable/chunks/singletons.593b1054.js"];
export const stylesheets = [];
export const fonts = [];
