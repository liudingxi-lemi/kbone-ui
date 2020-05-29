# 修改

注释掉了的代码 @ src/index.js
```js
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(WeUI)
}
```

原因： 不知道为什么， WeUI 居然是未定义的


## 相关链接

* [kbone-ui 组件文档](https://wechat-miniprogram.github.io/kbone/docs/ui/intro/)
* [kbone-ui 示例](https://wechat-miniprogram.github.io/kboneui/ui/#/)

## 快速上手

下载 kbone-ui

```sh
npm install kbone-ui  
```

加载全部组件内容，并引入 weui 样式库：

```js
import KboneUI from 'kbone-ui'
import 'kbone-ui/lib/weui/weui.css'

Vue.use(KboneUI)
```


## LICENSE

MIT
