function storage() {
  const local = { 
    get(key) {
      try {
        return JSON.parse(
          localStorage.getItem(key)
        )
      } catch (error) {
        throw new Error(`Error reading item from local storage using key: ${key}.`)
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value))
      } catch (error) {
        throw new Error(`Error writing to local storage using key: ${key}.`)
      }
    },
    remove(key) {
      try {
        localStorage.removeItem(key)
      } catch (error) {
        throw new Error(`Error removing item from local storage using key: ${key}`)
      }
    },
    clear() {
      try {
        localStorage.clear()
      } catch (error) {
        throw new Error('Error clearing items from local storage.')
      }
    },
    key(n) {
      try {
        return localStorage.key(n)
      } catch (error) {
        throw new Error(`Error retrieving key from local storage using index: ${n}.`)
      }
    }
  }

  const session = { 
    get(key) {
      try {
        return JSON.parse(
          sessionStorage.getItem(key)
        )
      } catch (error) {
        throw new Error(`Error reading item from session storage using key: ${key}.`)
      }
    },
    set(key, value) {
      try {
        sessionStorage.setItem(key, JSON.stringify(value))
      } catch (error) {
        throw new Error(`Error writing item to session storage using key: ${key}.`)
      }
    },
    remove(key) {
      try {
        sessionStorage.removeItem(key)
      } catch (error) {
        throw new Error(`Error removing item from local storage using key: ${key}`)
      }
    },
    clear() {
      try {
        sessionStorage.clear()
      } catch (error) {
        throw new Error('Error clearing items from session storage.')
      }
    },
    key(n) {
      try {
        return sessionStorage.key(n)
      } catch (error) {
        throw new Error(`Error retrieving key from session storage using index: ${n}.`)
      }
    }
  }

  return {local, session}
}

export default storage()
