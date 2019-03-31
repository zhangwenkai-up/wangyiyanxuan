// 包含n个接口请求函数的模块
import ajax from './ajax'
const api = '/api'

export const reqShouye = () => ajax('/shouye')
export const reqFenlei = () => ajax('/fenlei')
export const reqShiwu = () => ajax('/shiwu')
export const reqSearch = () => ajax(`${api}/xhr/search/init.json`)
