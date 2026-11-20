#!/usr/bin/env node
/** Build the browser entry into the DSH module-loader format. */
import { build } from 'esbuild'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const bundlePath = join(root, 'build', 'client.bundle.cjs')
const outPath = join(root, 'lib', 'client.js')

await mkdir(dirname(bundlePath), { recursive: true })
await build({
  absWorkingDir: root,
  entryPoints: ['src/client.jsx'],
  bundle: true,
  format: 'cjs',
  platform: 'browser',
  external: ['react'],
  jsx: 'transform',
  target: 'es2022',
  outfile: bundlePath,
  logLevel: 'warning',
})

const code = await readFile(bundlePath, 'utf8')
const wrapped = `/* dsh-diet browser entry, built from src/client.jsx. */
window.__ModuleLoader__.load({
  id: 'dsh-diet',
  factory(require) {
    var module = { exports: {} };
    var exports = module.exports;
${code}
    return module.exports;
  },
});
`
await mkdir(dirname(outPath), { recursive: true })
await writeFile(outPath, wrapped)
console.log(`built ${outPath} (${wrapped.length} bytes)`)
