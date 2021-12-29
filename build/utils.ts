import path from 'path'

export function resolve(dir: string) {
  return path.resolve(process.cwd(), dir)
}
