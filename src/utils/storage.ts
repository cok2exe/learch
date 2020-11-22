export const keys = {
  nickname: 'lol_nickname'
}

export default {
  get: (key: string) => {
    const item: string | null = localStorage.getItem(key)
    return JSON.parse(item ? item : '')
  },
  set: (key: string, value: string) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key: string) => localStorage.removeItem(key),
  clear: () => localStorage.clear()
}
