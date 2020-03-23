import request from '@/utils/request';

const rootPath='/v1';

export async function AccountLogin(params) {
  return request(`${rootPath}/users/login`, {
    method: 'POST',
    data: params,
  });
}
