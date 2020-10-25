# vue-source

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 阅读源码

这里修改版本为运行+编译版本

在vue.config.js更改配置为：

```javascript
const path = require('path');
function resolve(dir) {
	return path.join(__dirname, dir);
}
module.exports = {
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('vue$', 'vue/dist/vue.esm.js')
	},
}
```

即可更改vue.runtime.esm.js为vue.esm.js