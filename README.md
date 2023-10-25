# Storage
A robust and easy-to-use utility for interacting with Web Storage API (localStorage and sessionStorage). This utility abstracts away the raw Web Storage API, providing enhanced error handling and JSON serialization/deserialization out of the box.  

## Features
- Consistent methods for both localStorage and sessionStorage.
- Built-in JSON serialization and deserialization.
- Robust error handling with descriptive error messages.
- Simplified interface for common storage operations.  

## Installation
Using NPM.
```bash
npm install @sswahn/database
```

## Usage  
Import library.  
```javascript
import storage from '@sswahn/storage'
```
### Local Storage  
Store and retrieve data from local storage. 
```javascript
storage.local.set('user', data)
const user = storage.local.get('user')
```  

### Session Storage  
Store and retrieve data from session storage.   
```javascript
storage.session.set('user', data)
const user = storage.session.get('user')
```

 

## License
Storage is [MIT Licensed](https://github.com/sswahn/storage/blob/main/LICENSE)
