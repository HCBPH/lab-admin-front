export function localGet (key) {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(window.localStorage.getItem(key))
  } catch (error) {
    return value
  }
}

export function localSet (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function localRemove (key) {
  window.localStorage.removeItem(key)
}

// 判断内容是否含有表情字符，现有数据库不支持。
export function hasEmoji (str = '') {
  const reg = /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g;
  return str.match(reg) && str.match(reg).length
}

// 单张店铺图片上传
export const uploadImgServer = '/pic/store/upload_store_picture'
// 推荐图片上传
export const uploadRemServer = '/pic/publish/recommend_img'
// 多张图片上传
 export const uploadImgsServer = 'http://backend-api-02.newbee.ltd/manage-api/v1/upload/files'

export const pathMap = {
  login: '登录',
  dashboard: '用户数据',
  account: '修改账户',
  shop: '店铺信息',
  recommend:'推荐信息',
  accuse:'投诉信息',
  user:'用户信息',
  recommendDetail:'推荐详情',
  recommend_add:'上传推荐',
  shop_info:'店铺信息',
  shop_add:'上传店铺'
}