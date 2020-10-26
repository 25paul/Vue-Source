vue官方教程： https://cn.vuejs.org/v2/guide/custom-directive.html

#### 指令全局注册

```javascript
Vue.directive('loading', {})
```

全局注册源码

```javacript
function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}
```

ASSET_TYPES包含：

```javascript
var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];
```

如果指令没有定义的话，则找到当前实例options下的directives, 并将指令名称存放在里面；

如果指令有定义的话，根据条件对所定义的内容definition做处理之后，存放到options下的directives对象中并返回；这样就完成指针的全局注册；

例子中使用的是update，所有会在数据更新的时候执行自定义指令的update方法：

vue中的hooks： 

```javascript
var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];
```

```javascript
function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  ···

 }
```

vue更新数据会对虚拟dom进行对比，对比之后会patchVnode，这个时候会执行：

```javascript
if (isDef(data) && isPatchable(vnode)) {
  for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
  if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
}
```

然后就会执行到指令的更新updateDirectives：

```javascript
function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}
```

这个时候在_update的时候就会执行指令中对应的钩子，这里的钩子是update

```javascript
callHook$1(dir, 'update', vnode, oldVnode);
```

dir就是格式化后的当前的指令的对象； vnode就是当前的虚拟dom；

```javascript
function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}
```

拿到自定义指令中定义的处理函数，并执行；

下面是指令更新的完成代码：

```javascript
function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  
  //bind、update

  //inserted

  //componentUpdated

  //unbind
}
```




















