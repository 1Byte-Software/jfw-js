## Getting started

### Installation

Before you start, make sure you have a fresh version of [Node.js](https://nodejs.org/en/) installed. The current Long Term Support (LTS) release is an ideal starting point.

```bash
# Run this command in your project root folder.
# yarn
yarn add jfw-js

# npm
npm install --save jfw-js
```

Then you can simply import or require the module.

```javascript
// ES module
import { AuthClient } from 'jfw-js';
const authClient = new AuthClient(/* configOptions */);
```

```javascript
// CommonJS
var AuthClient = require('jfw-js').AuthClient;
var authClient = new AuthClient(/* configOptions */);
```
