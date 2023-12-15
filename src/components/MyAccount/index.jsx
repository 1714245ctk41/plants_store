import Icons from '../common/Icons';
import { accountListItem } from './setting';
import './index.css';

const MyAccount = () => {
  return (
    <div
      className='account menu-item-has-children p-14-20 p-tb-14 flex'
      style={{ paddingRight: 0, paddingLeft: '24px' }}
    >
      <Icons iconKey='user' />
      &nbsp; My Account
      <ul
        className='ul-none-style sub-menu border p-t-10'
        style={{ right: 0, width: '200px' }}
      >
        <li className='welcome-account bold'>Hello, Hoang tran!</li>
        {accountListItem.map((item) => (
          <li key={Math.random()} className='p-lr-20 line-height-2'>
            <a href='#'>{item.title}</a>
          </li>
        ))}
        <li className='p-lr-20 line-height-2 border-top pe-icon-7-stroke-logout m-t-10 p-tb-5 hover'>
          <a href='#'>Log out</a>
        </li>
      </ul>
    </div>
  );
};

export default MyAccount;
