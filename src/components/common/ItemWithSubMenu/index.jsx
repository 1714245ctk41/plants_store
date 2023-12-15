import './index.css';

const ItemWithSubMenu = ({ menus }) => {
  return (
    <ul className='header-multi-language ul-none-style'>
      {menus.map((menu, index) => (
        <li
          key={Math.random()}
          className={`menu-item-has-children p-14-20 pe-icon-7-stroke-down hover ${
            index && 'break-icon-vertical'
          } ${!(index % 2) && 'm-r-20'}`}
        >
          {menu.title}
          <ul className='ul-none-style sub-menu border'>
            {menu.menuChilds.map((menuChild) => (
              <li key={Math.random()} className='p-lr-10 line-height-2'>
                <a href='#'>{menuChild}</a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default ItemWithSubMenu;
