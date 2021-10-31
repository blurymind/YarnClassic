// Maybe we'll treat this like a promise
// This is where we will set up our worker thread, this will just emit the completed json document
const compilerReady = new Promise((resolve, reject) => {
  self.Module = {};
  self.Module.onRuntimeInitialized = () => {
    try {
      const config = {
        vfsPrefix: 'dlls',
        deployPrefix: 'dlls',
        enableDebugging: 0,
      };
      // TODO: fix assembly format for some of the different types
      const assemblies = [
        'ink_compiler.dll',
        'ink-engine-runtime.dll',
        'wasm-target.dll',
        'mscorlib.dll',
        'WebAssembly.Bindings.dll',
        'netstandard.dll',
        'System.dll',
        'System.Core.dll',
      ];

      MONO.mono_load_runtime_and_bcl(
        config.vfsPrefix,
        config.deployPrefix,
        config.enableDebugging,
        assemblies,
        () => {
          Module.mono_bindings_init(
            '[WebAssembly.Bindings]WebAssembly.Runtime'
          );
          resolve(
            Module.mono_bind_static_method('[wasm-target] CompileHelper:JSON')
          );
        }
      );
    } catch (ex) {
      reject(ex);
    }
  };
});
// message back the main section when we are done, at worst we can treat this like a fun global in a react app, that handles all of that part for us
importScripts('mono.js');

compilerReady.then(compile => {
  postMessage('ready');
  self.onmessage = function(e) {
    const compiled = compile(e.data);
    const json = JSON.parse(compiled);
    postMessage(json);
  };
});
