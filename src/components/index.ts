import request from '@/config/axios'
import $ from 'jquery'

// 测试连接
export const testConnection = (data: any) => {
  return request.post({ url: '/system/datasource/testConnection', data })
}

// 保存数据源配置
export const saveDataSourceConfig = (data: any) => {
  return request.post({ url: '/system/datasource/saveDataSourceConfig', data })
}
// 获取数据源配置列表
export const getDataSourcePage = (data: any) => {
  return request.post({ url: '/system/datasource/getDataSourcePage', data })
}
// 获取数据源历史配置列表
export const getDataSourceHisList = (data: any) => {
  return request.get({ url: '/system/datasource/getDataSourceHisList?dataSourceId=' + data })
}
// 获取数据源历史配置详情
export const getDataSourceHisById = (data: any) => {
  return request.get({ url: '/system/datasource/getDataSourceHisById?id=' + data })
}
// 获取数据源历史配置详情
export const getDataSourceById = (data: any) => {
  return request.get({ url: '/system/datasource/getDataSourceById?dataSourceId=' + data })
}
