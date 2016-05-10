import test from 'tape'
import fs from '../'
import path from 'path'
const cases = path.join(__dirname, 'cases')


test('fs.access', async (t) => {
  const access = path.join(cases, 'access.js')
  try {
    await fs.access(access, fs.F_OK)
    t.pass('access')
  } catch (e) {
    t.fail('access')
  }

  try {
    await fs.access(access, fs.X_OK)
    t.fail('access 2')
  } catch (e) {
    t.pass('access 2')
  }
  t.end()
})

test('fs.appendFile', async (t) => {
  const result = path.join(cases, 'appendFile.result.js')
  try {
    await fs.appendFile(result, 'this file was created')
    t.pass('appendFile')
  } catch (e) {
    t.fail('appendFile')
  }

  t.end()
})

test('fs.chmod', async (t) => {
  const chmod = path.join(cases, 'chmod.js')
  try {
    await fs.chmod(chmod, fs.F_OK)
    t.pass('chmod')
  } catch (e) {
    t.fail('chmod')
  }
  t.end()
})

test('fs.chown', async (t) => {
  const chown = path.join(cases, 'chown.js')
  try {
    await fs.chown(chown, 1, 2)
    t.pass('chown')
  } catch (e) {
    t.fail('chown')
  }
  t.end()
})
//
// test('fs.close', async (t) => {
//   const close = path.join(cases, 'close.js')
//   const result = path.join(cases, 'close.result.js')
//   await fs.close(close)
//   t.end()
// })
//
test('fs.copy', async (t) => {
  const copy = path.join(cases, 'copy.js')
  const result = path.join(cases, 'copy.result.js')
  try {
    await fs.copy(copy, result)
    await fs.stat(result)
    t.pass(`${result} exists`)
  } catch (e) {
    t.fail(`${result} doesn't exist`)
  }

  t.end()
})

test('fs.createFile', async (t) => {
  const result = path.join(cases, 'createFile.result.js')
  try {
    await fs.createFile(result)
    t.pass('createFile')
  } catch (e) {
    t.fail('createFile')
  }
  t.end()
})
//
// test('fs.createLink', async (t) => {
//   const createLink = path.join(cases, 'createLink.js')
//   const result = path.join(cases, 'createLink.result.js')
//   await fs.createLink(createLink)
//   t.end()
// })
//
// test('fs.createReadStream', async (t) => {
//   const createReadStream = path.join(cases, 'createReadStream.js')
//   const result = path.join(cases, 'createReadStream.result.js')
//   await fs.createReadStream(createReadStream)
//   t.end()
// })
//
// test('fs.createSymlink', async (t) => {
//   const createSymlink = path.join(cases, 'createSymlink.js')
//   const result = path.join(cases, 'createSymlink.result.js')
//   await fs.createSymlink(createSymlink)
//   t.end()
// })
//
// test('fs.createWriteStream', async (t) => {
//   const createWriteStream = path.join(cases, 'createWriteStream.js')
//   const result = path.join(cases, 'createWriteStream.result.js')
//   await fs.createWriteStream(createWriteStream)
//   t.end()
// })
//
// test('fs.emptyDir', async (t) => {
//   const emptyDir = path.join(cases, 'emptyDir.js')
//   const result = path.join(cases, 'emptyDir.result.js')
//   await fs.emptyDir(emptyDir)
//   t.end()
// })
//
// test('fs.emptydir', async (t) => {
//   const emptydir = path.join(cases, 'emptydir.js')
//   const result = path.join(cases, 'emptydir.result.js')
//   await fs.emptydir(emptydir)
//   t.end()
// })
//
// test('fs.ensureDir', async (t) => {
//   const ensureDir = path.join(cases, 'ensureDir.js')
//   const result = path.join(cases, 'ensureDir.result.js')
//   await fs.ensureDir(ensureDir)
//   t.end()
// })
//
test('fs.ensureFile', async (t) => {
  const result = path.join(cases, 'ensureFile.result.js')
  try {
    await fs.ensureFile(result)
    t.pass('ensureFile')
  } catch (e) {
    t.fail('ensureFile')
  }
  t.end()
})
//
// test('fs.ensureLink', async (t) => {
//   const ensureLink = path.join(cases, 'ensureLink.js')
//   const result = path.join(cases, 'ensureLink.result.js')
//   await fs.ensureLink(ensureLink)
//   t.end()
// })
//
// test('fs.ensureSymlink', async (t) => {
//   const ensureSymlink = path.join(cases, 'ensureSymlink.js')
//   const result = path.join(cases, 'ensureSymlink.result.js')
//   await fs.ensureSymlink(ensureSymlink)
//   t.end()
// })
//
// test('fs.exists', async (t) => {
//   const exists = path.join(cases, 'exists.js')
//   const result = path.join(cases, 'exists.result.js')
//   await fs.exists(exists)
//   t.end()
// })
//
// test('fs.fchmod', async (t) => {
//   const fchmod = path.join(cases, 'fchmod.js')
//   const result = path.join(cases, 'fchmod.result.js')
//   await fs.fchmod(fchmod)
//   t.end()
// })
//
// test('fs.fchown', async (t) => {
//   const fchown = path.join(cases, 'fchown.js')
//   const result = path.join(cases, 'fchown.result.js')
//   await fs.fchown(fchown)
//   t.end()
// })
//
// test('fs.fstat', async (t) => {
//   const fstat = path.join(cases, 'fstat.js')
//   const result = path.join(cases, 'fstat.result.js')
//   await fs.fstat(fstat)
//   t.end()
// })
//
// test('fs.ftruncate', async (t) => {
//   const ftruncate = path.join(cases, 'ftruncate.js')
//   const result = path.join(cases, 'ftruncate.result.js')
//   await fs.ftruncate(ftruncate)
//   t.end()
// })
//
// test('fs.futimes', async (t) => {
//   const futimes = path.join(cases, 'futimes.js')
//   const result = path.join(cases, 'futimes.result.js')
//   await fs.futimes(futimes)
//   t.end()
// })
//
// test('fs.gracefulify', async (t) => {
//   const gracefulify = path.join(cases, 'gracefulify.js')
//   const result = path.join(cases, 'gracefulify.result.js')
//   await fs.gracefulify(gracefulify)
//   t.end()
// })
//
// test('fs.jsonfile', async (t) => {
//   const jsonfile = path.join(cases, 'jsonfile.js')
//   const result = path.join(cases, 'jsonfile.result.js')
//   await fs.jsonfile(jsonfile)
//   t.end()
// })
//
// test('fs.lchmod', async (t) => {
//   const lchmod = path.join(cases, 'lchmod.js')
//   const result = path.join(cases, 'lchmod.result.js')
//   await fs.lchmod(lchmod)
//   t.end()
// })
//
// test('fs.lchown', async (t) => {
//   const lchown = path.join(cases, 'lchown.js')
//   const result = path.join(cases, 'lchown.result.js')
//   await fs.lchown(lchown)
//   t.end()
// })
//
// test('fs.link', async (t) => {
//   const link = path.join(cases, 'link.js')
//   const result = path.join(cases, 'link.result.js')
//   await fs.link(link)
//   t.end()
// })
//
// test('fs.lstat', async (t) => {
//   const lstat = path.join(cases, 'lstat.js')
//   const result = path.join(cases, 'lstat.result.js')
//   await fs.lstat(lstat)
//   t.end()
// })
//
// test('fs.lutimes', async (t) => {
//   const lutimes = path.join(cases, 'lutimes.js')
//   const result = path.join(cases, 'lutimes.result.js')
//   await fs.lutimes(lutimes)
//   t.end()
// })
//
// test('fs.mkdir', async (t) => {
//   const mkdir = path.join(cases, 'mkdir.js')
//   const result = path.join(cases, 'mkdir.result.js')
//   await fs.mkdir(mkdir)
//   t.end()
// })
//
// test('fs.mkdirp', async (t) => {
//   const mkdirp = path.join(cases, 'mkdirp.js')
//   const result = path.join(cases, 'mkdirp.result.js')
//   await fs.mkdirp(mkdirp)
//   t.end()
// })
//
// test('fs.mkdirs', async (t) => {
//   const mkdirs = path.join(cases, 'mkdirs.js')
//   const result = path.join(cases, 'mkdirs.result.js')
//   await fs.mkdirs(mkdirs)
//   t.end()
// })
//
// test('fs.move', async (t) => {
//   const move = path.join(cases, 'move.js')
//   const result = path.join(cases, 'move.result.js')
//   await fs.move(move)
//   t.end()
// })
//
// test('fs.open', async (t) => {
//   const open = path.join(cases, 'open.js')
//   const result = path.join(cases, 'open.result.js')
//   await fs.open(open)
//   t.end()
// })
//
// test('fs.outputFile', async (t) => {
//   const outputFile = path.join(cases, 'outputFile.js')
//   const result = path.join(cases, 'outputFile.result.js')
//   await fs.outputFile(outputFile)
//   t.end()
// })
//
// test('fs.outputJSON', async (t) => {
//   const outputJSON = path.join(cases, 'outputJSON.js')
//   const result = path.join(cases, 'outputJSON.result.js')
//   await fs.outputJSON(outputJSON)
//   t.end()
// })
//
// test('fs.outputJson', async (t) => {
//   const outputJson = path.join(cases, 'outputJson.js')
//   const result = path.join(cases, 'outputJson.result.js')
//   await fs.outputJson(outputJson)
//   t.end()
// })
//
// test('fs.read', async (t) => {
//   const read = path.join(cases, 'read.js')
//   const result = path.join(cases, 'read.result.js')
//   await fs.read(read)
//   t.end()
// })
//
// test('fs.readFile', async (t) => {
//   const readFile = path.join(cases, 'readFile.js')
//   const result = path.join(cases, 'readFile.result.js')
//   await fs.readFile(readFile)
//   t.end()
// })
//
// test('fs.readJSON', async (t) => {
//   const readJSON = path.join(cases, 'readJSON.js')
//   const result = path.join(cases, 'readJSON.result.js')
//   await fs.readJSON(readJSON)
//   t.end()
// })
//
// test('fs.readJson', async (t) => {
//   const readJson = path.join(cases, 'readJson.js')
//   const result = path.join(cases, 'readJson.result.js')
//   await fs.readJson(readJson)
//   t.end()
// })
//
// test('fs.readdir', async (t) => {
//   const readdir = path.join(cases, 'readdir.js')
//   const result = path.join(cases, 'readdir.result.js')
//   await fs.readdir(readdir)
//   t.end()
// })
//
// test('fs.readlink', async (t) => {
//   const readlink = path.join(cases, 'readlink.js')
//   const result = path.join(cases, 'readlink.result.js')
//   await fs.readlink(readlink)
//   t.end()
// })
//
// test('fs.realpath', async (t) => {
//   const realpath = path.join(cases, 'realpath.js')
//   const result = path.join(cases, 'realpath.result.js')
//   await fs.realpath(realpath)
//   t.end()
// })
//
// test('fs.remove', async (t) => {
//   const remove = path.join(cases, 'remove.js')
//   const result = path.join(cases, 'remove.result.js')
//   await fs.remove(remove)
//   t.end()
// })
//
// test('fs.rename', async (t) => {
//   const rename = path.join(cases, 'rename.js')
//   const result = path.join(cases, 'rename.result.js')
//   await fs.rename(rename)
//   t.end()
// })
//
// test('fs.rmdir', async (t) => {
//   const rmdir = path.join(cases, 'rmdir.js')
//   const result = path.join(cases, 'rmdir.result.js')
//   await fs.rmdir(rmdir)
//   t.end()
// })
//
// test('fs.spaces', async (t) => {
//   const spaces = path.join(cases, 'spaces.js')
//   const result = path.join(cases, 'spaces.result.js')
//   await fs.spaces(spaces)
//   t.end()
// })

test('fs.stat', async (t) => {
  const truthy = path.join(cases, 'stat.js')
  const falsy = path.join(cases, 'a-file-that-is-not-real.js')

  try {
    await fs.stat(truthy)
    t.pass(`'${truthy}' exists`)
  } catch (e) {
    t.fail(`'${truthy}' should exist`)
  }

  try {
    await fs.stat(falsy)
    t.fail(`'${falsy}' shouldn't exist`)
  } catch (e) {
    t.pass(`'${falsy}' doesn't exist`)
  }
  t.end()
})


// test('fs.symlink', async (t) => {
//   const symlink = path.join(cases, 'symlink.js')
//   const result = path.join(cases, 'symlink.result.js')
//   await fs.symlink(symlink)
//   t.end()
// })
//
// test('fs.truncate', async (t) => {
//   const truncate = path.join(cases, 'truncate.js')
//   const result = path.join(cases, 'truncate.result.js')
//   await fs.truncate(truncate)
//   t.end()
// })
//
// test('fs.unlink', async (t) => {
//   const unlink = path.join(cases, 'unlink.js')
//   const result = path.join(cases, 'unlink.result.js')
//   await fs.unlink(unlink)
//   t.end()
// })
//
// test('fs.unwatchFile', async (t) => {
//   const unwatchFile = path.join(cases, 'unwatchFile.js')
//   const result = path.join(cases, 'unwatchFile.result.js')
//   await fs.unwatchFile(unwatchFile)
//   t.end()
// })
//
// test('fs.utimes', async (t) => {
//   const utimes = path.join(cases, 'utimes.js')
//   const result = path.join(cases, 'utimes.result.js')
//   await fs.utimes(utimes)
//   t.end()
// })
//
// test('fs.watch', async (t) => {
//   const watch = path.join(cases, 'watch.js')
//   const result = path.join(cases, 'watch.result.js')
//   await fs.watch(watch)
//   t.end()
// })
//
// test('fs.watchFile', async (t) => {
//   const watchFile = path.join(cases, 'watchFile.js')
//   const result = path.join(cases, 'watchFile.result.js')
//   await fs.watchFile(watchFile)
//   t.end()
// })
//
// test('fs.write', async (t) => {
//   const write = path.join(cases, 'write.js')
//   const result = path.join(cases, 'write.result.js')
//   await fs.write(write)
//   t.end()
// })
//
// test('fs.writeFile', async (t) => {
//   const writeFile = path.join(cases, 'writeFile.js')
//   const result = path.join(cases, 'writeFile.result.js')
//   await fs.writeFile(writeFile)
//   t.end()
// })
//
// test('fs.writeJSON', async (t) => {
//   const writeJSON = path.join(cases, 'writeJSON.js')
//   const result = path.join(cases, 'writeJSON.result.js')
//   await fs.writeJSON(writeJSON)
//   t.end()
// })
//
// test('fs.writeJson', async (t) => {
//   const writeJson = path.join(cases, 'writeJson.js')
//   const result = path.join(cases, 'writeJson.result.js')
//   await fs.writeJson(writeJson)
//   t.end()
// })
