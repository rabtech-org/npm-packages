# @rabtech/prettier-config-standard

Rabtech's prettier configuration for [shareable config](https://prettier.io/docs/en/configuration.html#sharing-configurations)
for projects using **[Prettier](https://prettier.io/)**.

## Installation

```
npm install -D @rabtech/prettier-config-standard
```

_This is only a shareable configuration. It does not install Prettier or any other part of the tool chain._

## Usage

```jsonc
// `.prettierrc.json`
"@rabtech/prettier-config-standard"
```

```javascript
// `prettier.config.js` or `.prettierrc.js`
module.exports = '@rabtech/prettier-config-standard';
```

If you want to override or add some configuration

```javascript
// `prettier.config.js` or `.prettierrc.js`
const rabtechConfigStandard = require('@rabtech/prettier-config-standard');

module.exports = {
    ...rabtechConfigStandard,
    semi: false,
};
```
