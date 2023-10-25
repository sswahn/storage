# Storage
A robust and easy-to-use utility for interacting with Web Storage API (localStorage and sessionStorage) with built-in error handling. This utility abstracts away the raw Web Storage API, providing enhanced error handling and JSON serialization/deserialization out of the box.  

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

## API  

**local**  
Interacts with localStorage.  

`.get(key)`
Retrieves a parsed value from localStorage based on the provided key.  

`.set(key, value)`
Saves a value to localStorage under the specified key, value must be of type 'object'.

`.remove(key)`
Removes an item from localStorage using the specified key.  

`.clear()`
Clears all items from localStorage.  

`.key(n)`
Returns the name of the nth key in the localStorage.  

**session**  
Interacts with sessionStorage.  

Session methods are identical to the local API.  

## License
Storage is [MIT Licensed](https://github.com/sswahn/storage/blob/main/LICENSE)
