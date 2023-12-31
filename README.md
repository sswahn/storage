# Storage · [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/sswahn/storage/blob/main/LICENSE) ![npm version](https://img.shields.io/npm/v/@sswahn/storage) ![Weekly Downloads](https://img.shields.io/npm/dw/@sswahn/storage)
A robust and easy-to-use utility for interacting with Web Storage API (localStorage and sessionStorage). This utility abstracts away the raw Web Storage API, providing enhanced error handling and JSON serialization/deserialization out of the box.  

## Features
- Consistent methods for both localStorage and sessionStorage.
- Built-in JSON serialization and deserialization.
- Robust error handling with descriptive error messages.
- Simplified interface for common storage operations.  

## Installation
Using NPM.
```bash
npm install @sswahn/storage
```

## Usage  
Import library.  
```javascript
import storage from '@sswahn/storage'
```

### Local Storage  

Set an item.  
```javascript
storage.local.set('user', data)
```

Get an item.  
```javascript
const user = storage.local.get('user')
```

Remove an item.  
```javascript
storage.local.remove('user')
```

Clear all items.  
```javascript
storage.local.clear()
```

Retrieve a key by index.
```javascript
const keyName = storage.local.key(0)
```

### Session Storage  

The methods for sessionStorage are identical to those for localStorage.  
```javascript
storage.session.set('key', { data: 'some data' })
const data = storage.session.get('key')
storage.session.remove('key')
storage.session.clear()
const keyName = storage.session.key(0)
```

## Error Handling
Each method can be wrapped in a try-catch block, providing detailed error messages. Handle errors as per your application's requirements.
```javascript
try {
  const data = storage.local.get('key')
} catch (error) {
  console.error(error.message)
}
```

## Related
- [@sswahn/database](https://www.npmjs.com/package/@sswahn/database): Easily interact with the IndexedDB API with a simplified, promise-based approach.
- [@sswahn/cookie](https://www.npmjs.com/package/@sswahn/cookie): A lightweight, easy-to-use utility for efficiently managing cookies in a web browser.
- [@sswahn/cache](https://www.npmjs.com/package/@sswahn/cache): A robust caching utility that provides easy-to-use methods for interacting with the browser's Cache API.


## License
Storage is [MIT Licensed](https://github.com/sswahn/storage/blob/main/LICENSE)
