# medusa-wx-toast

日常开发中，`wx.showToast` 功能频繁的使用在 loading 与文本提示上，一般都会对该功能进行统一的封装。为了省去每个项目都需要封装一遍的麻烦，我将该功能提取为 medusa-wx-toast 工具包，该工具提供的功能如下：

## 参数描述

| name     | 参数类型 | 默认值 | 是否必填 | 描述                         |
| -------- | -------- | ------ | -------- | ---------------------------- |
| message  | String   | -      | 是       | 提示文本                     |
| image    | String   | -      | 否       | 自定义图标的本地路径         |
| duration | Number   | 2000   | 否       | 提示窗口停留持续时长（毫秒） |
| mask     | Boolean  | true   | 否       | 是否启用遮罩                 |
| success  | Function | -      | 否       | 成功回调                     |
| fail     | Function | -      | 否       | 失败回调                     |
| complete | Function | -      | 否       | 完成回调                     |

## 纯文本提示功能

``` javascript
/** 快捷调用形式 */
Toast('提示文本');

/** 完整形式 */
Toast({
  message: '提示文本',
  ...
});
```

## Loading 提示功能

``` javascript
/** 快捷调用形式 */
Toast.loading('loading...');

/** 完整形式 */
Toast.loading({
  message: 'loading...',
  ...
});
```

## 更改默认设置

本工具提供更改预设参数值的功能，在 App 启动时调用 `setDefaultOptions` 方法可以更改预设的参数，并且在后续任何位置的使用都能继承这一更改。

``` javascript
App({
  onLaunch() {
    Toast.setDefaultOptions({ duration: 1500 });
  },
});
```
