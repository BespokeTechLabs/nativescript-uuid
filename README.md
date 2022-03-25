# NativeScript UUID (Version 2)

This version of NativeScript UUID replaces the outdated call to `tns-core-modules` with `@nativescript/core`, making this library compatible with NativeScript 8.

## Description
This is a plugin for Nativescript that allows you to get a UUID (Universal Unique Identifier) for a device.

Uses the [`SAMKeychain Cocoa Pod`](https://cocoapods.org/pods/SAMKeychain) on iOS.

## Installation

Run the following command from the root of your project:

```
ns plugin add nativescript-uuid-v2
```

## Getting Started

#### JavaScript
```js
  const nsUuid = require("nativescript-uuid-v2");

  const uuid = nsUuid.getUUID();
  console.log(`The device UUID is ${uuid}`);
```

#### TypeScript
```typescript
  import {getUUID} from 'nativescript-uuid-v2';

  const uuid = getUUID();
  console.log(`The device UUID is ${uuid}`);
```

## Security

If you discover a security vulnerability within this package, please send an email to Bespoke Technology Labs at hello@bespoke.dev. All security vulnerabilities will be promptly addressed. You may view our full security policy [here](https://github.com/BespokeTechLabs/nativescript-uuid-v2/security/policy).


## License

The NativeScript UUID V2 Library is licensed under [The Apache 2.0 License](LICENSE).


## Credits

- @LewisSmallwood - Bespoke Technology Labs
- @gdtdpt
- @ignaciolarranaga
