// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority(str) {
  // return localStorage.getItem('antd-pro-authority') || ['admin', 'user'];
  const authorityString =
    typeof str === 'undefined' ? localStorage.getItem('crm-admin-authority-key') : str;
  // authorityString could be admin, "admin", ["admin"]

  let authority;
  try {
    authority = JSON.parse(authorityString);
  } catch (e) {
    authority = authorityString;
  }


  if (typeof authority === 'string') {  // 不是string，是json
    return [authority];
  }

  return ['orders_all_list'];  // 在这里返回权限规则
  // return authority
}
export function setAuthority(authority) {
  const proAuthority = typeof authority === 'string' ? [authority] : authority;
  return localStorage.setItem('crm-admin-authority-key', JSON.stringify(proAuthority));
}
