import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts'
import packageJson from "./package.json" assert { type: "json" };


// rollup.config.js
export default [{
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourceMap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourceMap: true,
            },
        ],
        plugins:[
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json"}),
            // postCSS()
        ]
    },
    // second configuration object defines how our libraries types are distributed and uses the dts plugin to do so.
    {
        input: 'dist/esm/types/index.d.ts', // part of types directory
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()]
    }
];
