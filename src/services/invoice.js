import request from '../utils/request';

export function fetch() {
  return request('/summary', {
    method:'GET',
    mode:'cors',// 避免cors攻击
    credentials: 'include'
  });
}

export function details() {
  return request('/detail', {
    method:'GET',
    mode:'cors',// 避免cors攻击
    credentials: 'include'
  });
}



