elementUI源码入口：node_modules\element-ui\src\index.js；使用vue.use引入的时候会调用这里的install方法

```javascript
const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.use(InfiniteScroll);
  Vue.use(Loading.directive);

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;

};
```


源码：可以在包管理器node_modules中找到~/element-ui/packages/form/src/form.vue

form的结构如下：

```javascript
<template>
  <form class="el-form" :class="[
    labelPosition ? 'el-form--label-' + labelPosition : '',
    { 'el-form--inline': inline }
  ]">
    <slot></slot>
  </form>
</template>
```

el-form自身属性并不多，基本上都是向下传递的；

比如disabled属性，这里并没有对其做处理，而是提供一个provide

```javascript
provide() {
      return {
        elForm: this
      };
    },
```

这个会传给input组件，

```javacript
inputDisabled() {
        return this.disabled || (this.elForm || {}).disabled;
      },
```

size属性也是类似

总结：通过provide/inject进行数据传递