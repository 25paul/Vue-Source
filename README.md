## filters

#### 源码

将render函数转换称虚拟node的时候，会有一下渲染语句： 

```javascript
_vm._f("lower")(_vm.message)
```

这里的_f函数就是resolveFilter函数；

```javascript
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}
```

通过resolveAsset进行解析：

```javascript
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}
```

如果assets存在filters的对应的id，则返回当前filter的处理函数；

所以在执行渲染函数的时候就可以直接把对应的值传给filter的处理函数了；