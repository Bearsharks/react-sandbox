import resolve from "@rollup/plugin-node-resolve";
import {swc} from "rollup-plugin-swc3";
import commonjs from '@rollup/plugin-commonjs';
import { dts } from "rollup-plugin-dts";
//import { terser } from "rollup-plugin-terser";

const defaultConfig = {
  input: "src/test/index.ts", // The entry point of your library
      output: [
    {
      file: "dist/my-library.cjs.js", // CommonJS 모듈 형식
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/my-library.cjs.mjs", // ES 모듈 형식
      format: "es",
      sourcemap: true,
    },
  {
      file: "dist/my-library.esm.js", // ES 모듈 형식
      format: "esm",
      sourcemap: true,
  }
  ],
      plugins: [
    resolve(), // Resolve modules from node_modules
    commonjs(),
    swc(), // SWC plugin to transpile code
    //terser(), // Minify the code using Terser
  ],
      external: ["react", "react-dom", "@emotion/react"],
};


const dtsconfig = {
      input: "src/test/index.ts",
      output: [
          {
              file: "dist/my-library.cjs.d.ts", // CommonJS 모듈 형식
              format: "cjs",
              sourcemap: true,
          },
      ],
      plugins: [dts()],
    external: ["react", "react-dom", "@emotion/react"],
}

export default [defaultConfig, dtsconfig];