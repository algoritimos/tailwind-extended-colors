```bash
npm install tailwind-extended-colors
```


```ts 
const colors = require("tailwind-extended-colors").default;

module.exports = {
  theme: {
    extend: {
      colors: colors.theme.extend.colors,
    },
  },
};
```
