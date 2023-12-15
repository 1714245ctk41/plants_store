import i18n from '../../i18n';
import Icons from '../common/Icons';
import ItemWithSubMenu from '../common/ItemWithSubMenu';
import MyAccount from '../MyAccount';
import { menus } from './setting';
import './index.css';

const TopBar = () => {
  return (
    <div className='border-bottom'>
      <div className='row '>
        <div className='flex justify-between align-center'>
          <div className='flex'>
            <Icons iconKey={'newsPaper'} style={{ fontSize: '20px' }} />
            &nbsp;{i18n.topbarContent.addAnything}
          </div>
          <div className='topbar-menu-container flex justify-end'>
            <div className='language-account'>
              <ItemWithSubMenu menus={menus} />
              <MyAccount />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
