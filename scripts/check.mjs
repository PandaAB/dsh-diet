#!/usr/bin/env node
/** Validate package resources and the generated browser entry without React. */
import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { en, zh } from '../src/locales.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const packageJson = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'))
const errors = []

if (packageJson.private === true) errors.push('package.json is private')
if (typeof packageJson.name !== 'string' || packageJson.name === '') errors.push('package.json name is missing')
if (packageJson.publishConfig?.access !== 'public') errors.push('publishConfig.access must be public')
if (!packageJson.dsh?.bundle?.patch) errors.push('dsh.bundle.patch is missing')
if (!packageJson.dsh?.client?.platform) errors.push('dsh.client.platform is missing')

for (const file of ['index.js', 'lib/client.js', 'cordis.patch.yml', 'icon.svg', 'README.md', 'LICENSE', 'README.zh.md', 'CHANGELOG.md']) {
  if (!existsSync(join(root, file))) errors.push(`missing ${file}`)
}
for (const file of ['locale/en.json', 'locale/zh.json']) {
  const value = JSON.parse(readFileSync(join(root, file), 'utf8'))
  if (typeof value.meta?.title !== 'string' || typeof value.meta?.description !== 'string') {
    errors.push(`${file} is missing meta.title or meta.description`)
  }
}

const iconSize = statSync(join(root, 'icon.svg')).size
if (iconSize > 256 * 1024) errors.push('icon.svg exceeds 256 KiB')
if (!readFileSync(join(root, 'icon.svg'), 'utf8').trimStart().startsWith('<svg')) errors.push('icon.svg is not an SVG')

const client = readFileSync(join(root, 'lib/client.js'), 'utf8')
if (!client.includes("id: 'dsh-diet'")) errors.push('client bundle has the wrong module id')
if (!client.includes('window.__ModuleLoader__.load')) errors.push('client bundle is not wrapped for the DSH module loader')
if (!client.includes('require("react")')) errors.push('client bundle does not require React')
execFileSync(process.execPath, ['--check', join(root, 'lib/client.js')], { stdio: 'inherit' })

const zhKeys = Object.keys(zh).sort()
const enKeys = Object.keys(en).sort()
if (zhKeys.length !== enKeys.length || zhKeys.some((key, index) => key !== enKeys[index])) {
  errors.push('zh and en locale key sets differ')
}

if (errors.length > 0) {
  for (const error of errors) console.error(`check: ${error}`)
  process.exit(1)
}
console.log(`check: ${packageJson.name}@${packageJson.version}, ${Object.keys(zh).length} locale keys, ${Math.round(client.length / 1024)} KiB bundle`)
