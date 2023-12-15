import { useState } from 'react';
import Icons from '../../common/Icons';
import { classToggle, menusVertical } from './setting';

const Vertical = () => {
  const [toggle, setToggle] = useState(classToggle.open);

  const toggleHandle = () => {
    toggle === classToggle.open
      ? setToggle(classToggle.close)
      : setToggle(classToggle.open);
  };

  return (
    <div className='vertical-menu-wrapper m-r-40'>
      <div
        className='browse-categories-btn background-green border-radius-t-6 flex pointer'
        onClick={toggleHandle}
      >
        <span className='vertical-menu' />
        BROWSE CATEGORIES
      </div>
      <ul
        className={`list-vertical-menu p-tb-5 ul-none-style border-radius-b-6 transition
        ${toggle}
      `}
      >
        {menusVertical.map((menu, index) => (
          <li
            key={Math.random()}
            className='p-lr-20 pointer position-relative vertical-menu-item'
          >
            <a
              href='#'
              className={`p-tb-6 ${
                index !== menusVertical.length - 1 && 'border-bottom'
              }`}
            >
              <div className={`flex align-center justify-between `}>
                <span className='flex align-center'>
                  {menu.icon}&nbsp;{menu.title}
                </span>
                {menu.childrens && <Icons iconKey='angleRight' />}
              </div>
            </a>

            {menu.childrens && (
              <ul className='ul-none-style vertical-list border transition-200'>
                {menu.childrens.map((children) => (
                  <li key={Math.random()} className='vertical-item-wrapper'>
                    <a
                      className='p-tb-5 vertical-item-link flex align-center justify-between transition-350'
                      href='#'
                    >
                      {children.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Vertical;
