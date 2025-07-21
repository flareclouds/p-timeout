// Wrapper for CommonJS consumers
const mod = await import('./index.js');
module.exports = mod.default;
module.exports.TimeoutError = mod.TimeoutError;
module.exports.AbortError = mod.AbortError; 