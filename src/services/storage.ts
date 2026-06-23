export class LocalStorageService {
  static set(key: string, value: any): void {
    try {
      const serializedValue = typeof value === 'string' ? value : JSON.stringify(value)
      localStorage.setItem(key, serializedValue)
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }

  static get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key)
      if (!item) return null

      return item.startsWith('{') || item.startsWith('[')
        ? (JSON.parse(item) as T)
        : (item as unknown as T)
    } catch (error) {
      console.error(`Error getting localStorage key "${key}":`, error)
      return null
    }
  }

  static remove(key: string): void {
    localStorage.removeItem(key)
  }

  static clear(): void {
    localStorage.clear()
  }
}
