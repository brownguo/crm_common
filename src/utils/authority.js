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

  if (typeof authority === 'string') {
    return [authority];
  }
  return authority;
}
export function setAuthority(info) {
  // 退出登录
  if (info !== 'undefined') {
    localStorage.setItem('crm-admin-authority-key', JSON.stringify(info));
  } else {
    localStorage.removeItem('crm-admin-authority-key');
  }
}
