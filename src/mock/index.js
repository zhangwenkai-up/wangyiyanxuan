// 使用mockjs定义mock数据接口，该模块只需要被执行一次，并且不需要向外暴露任何东西
import Mock from 'mockjs'
// json对象 ===> js对象
import shouye from './shouye_data'
import fenlei from './datafenlei'
import shiwu from './datashiwu'

// 返回的接口
Mock.mock('/shouye', {code: 0, data: shouye})
Mock.mock('/fenlei', {code: 0, data: fenlei})
Mock.mock('/shiwu', {code: 0, data: shiwu})
