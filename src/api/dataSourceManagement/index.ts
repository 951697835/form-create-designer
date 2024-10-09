import request from "../../apiConfig/axios";
// 获取数据源历史配置详情
export const getDataSourceById = (data: any) => {
  return request.get({
    url: "/system/datasource/getDataSourceById?dataSourceId=" + data,
  });
};
