## Vue.use

#### 源码

```javascript
function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}
```
先从installedPlugins数组中判断该插件是否已经安装过了，如果安装过的话直接return；

截取第一个参数后面的所有参数并存放在args中，并将Vue添加到args中；

如果use传进来的参数有install方法，则执行该方法，否则如果参数是一个函数，则执行改函数；

最后将插件参数存在installedPlugins中