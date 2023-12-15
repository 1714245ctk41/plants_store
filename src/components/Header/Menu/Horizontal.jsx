import Icons from '../../common/Icons';
import { menusHorizontal } from './setting';

const Horizontal = () => {
  const showMenuChild = (menu) => {
    return (
      <ul className='ul-none-style horizontal-list border'>
        {menu.childrens.map((children1) => (
          <li key={Math.random()} className='horizontal-item-wrapper'>
            <a
              className='p-tb-5 horizontal-item-link flex align-center justify-between'
              href='#'
            >
              {children1.title}
              {children1.childrens && <Icons iconKey='angleRight' />}
            </a>
            {children1.childrens && showMenuChild(children1)}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className='horizontal-menu-wrapper flex justify-between align-center'>
      <ul className='horizontal-menu-list ul-none-style'>
        {menusHorizontal.map((menu) => (
          <li key={Math.random()} className='horizontal-menu-item'>
            <div className='horizontal-menu-link-wrap'>
              <a className='horizontal-menu-link p-tb-15 m-r-40' href='#'>
                {menu.title}
                <i className='pe-7s-angle-down' />
              </a>
            </div>

            {menu.childrens && (
              <ul className='ul-none-style horizontal-menu-child border'>
                {menu.childrens.map((children) => (
                  <li key={Math.random()} className='horizontal-father-item-wrapper'>
                    <a
                      className='p-tb-5 horizontal-item-link flex align-center justify-between'
                      href='#'
                    >
                      {children.title}
                      {children.childrens && <Icons iconKey='angleRight' />}
                    </a>
                    {children.childrens && showMenuChild(children)}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className='phone'>
        <a href='tel:(+01)-800-3456-88' className='flex align-center'>
          <i className='icon-headphone' />
          &nbsp;(+01)-800-3456-88
        </a>
      </div>
    </div>
  );
};

export default Horizontal;
