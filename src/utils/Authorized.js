import RenderAuthorize from '@/components/Authorized';
import { getAuthority } from './authority';


const getAuthorityList = () => {
  const  ret = getAuthority();
  if ( ret !== null ) {
    return ret.authList; // eslint-disable-line
  }
};
let Authorized = RenderAuthorize(getAuthorityList()); // eslint-disable-line

// Reload the rights component
const reloadAuthorized = () => {
  Authorized = RenderAuthorize(getAuthorityList());
};

export { reloadAuthorized };
export default Authorized;
