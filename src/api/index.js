// 包含n个接口请求函数的模块
import ajax from './ajax'

export const reqShouye = () => ajax('/shouye')
export const reqFenlei = () => ajax('/fenlei')
export const reqShiwu = () => ajax('/shiwu')

