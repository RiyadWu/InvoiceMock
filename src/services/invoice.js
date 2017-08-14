import request from '../utils/request';

export function summary() {
  return request('/summary', {
    method:'GET',
    mode:'cors',// 避免cors攻击
    credentials: 'include'
  });
}



