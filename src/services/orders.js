import { stringify } from 'qs';
import request from '@/utils/request';

const rootPath='/v1';

export async function queryRule(params) {
  return request(`${rootPath}/orders/list/get?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyIwIjp7Imp0aSI6IndlaXlpaWQiLCJpc3MiOiJodHRwOlwvXC90ZXN0Lmp3dC5jb20iLCJhdWQiOiJodHRwOlwvXC90ZXN0Lmp3dC5jb20iLCJzdWIiOiJodHRwOlwvXC90ZXN0Lmp3dC5jb20iLCJpYXQiOjE1ODQ5NDU5NTIsIm5iZiI6MTU4NDk0NTk1MiwiZGF0YSI6W3siRmlkIjoiMiIsIkZhY2NvdW50IjoiYWRtaW4iLCJGbG9naW5Db3VudCI6IjU1MiIsIkZuaWNrbmFtZSI6Ilx1OThjZVx1NmUwNVx1NjI2YyJ9XX0sInNjb3BlcyI6IkFjY2VzcyIsImV4cCI6MTU4NDk0OTU1Mn0.NUuksnhCKffWMJALhgeUD0y3SYCJiIFVVfM5xbqImdI&id=${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params = {}) {
  return request(`/api/rule?${stringify(params.query)}`, {
    method: 'POST',
    data: {
      ...params.body,
      method: 'update',
    },
  });
}
