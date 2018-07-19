### 使用方法
```javascript
// 引入方法
import { promisifys, toPromisify } from './promisy.js'

// 以request举例，其他同理
promisifys.request({url: 'xxx'})
  .then((res) => {
    // TODO somethings
  }).catch((err) => {
    // TODO somethings
  })


// 亦可以使用工厂方法构造自己的promise

const func = toPromisify(wx.xxx)

func(option)
  .then((res) => {
    // TODO somethings
  }).catch((err) => {
    // TODO somethings
  })
```