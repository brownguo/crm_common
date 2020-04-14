import { stringify } from 'qs';
import request from '@/utils/request';

const rootPath = '/v1';

export async function queryUserList(params) {
  return request(`${rootPath}/configure/users/query?${stringify(params)}`);
}
