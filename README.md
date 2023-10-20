# Storage
A robust and easy-to-use utility for interacting with Web Storage API (localStorage and sessionStorage) with built-in error handling.  

## Usage  
```javascript
import storage from '@sswahn/storage'
```
### Local Storage  
```javascript
storage.local.set('user', data)
const user = storage.local.get('user')
```  

### Session Storage  
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

## Licence
Bind is [MIT Licensed](https://github.com/sswahn/bind/blob/main/LICENSE)
