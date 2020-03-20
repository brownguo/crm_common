import { stringify } from 'qs';
import request from '@/utils/request';

export async function queryRule(params) {
  return request(`/server/api/rule?${stringify(params)}`);
}
