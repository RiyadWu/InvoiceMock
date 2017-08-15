import request from '../utils/request';

export function fetch() {
  console.log('in summary API')
  return request('/summary', {
    method:'GET',
    mode:'cors',// 避免cors攻击
    credentials: 'include'
  });
}
