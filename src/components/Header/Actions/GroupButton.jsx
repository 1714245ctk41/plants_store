import Icons from '../../common/Icons';

const GroupButton = ({}) => {
  return (
    <div className='icons-wrapper flex justify-end align-center justify-end'>
      <ul className='ul-none-style flex gap-15'>
        <li className='menu-item-has-children'>
          <a href='#'>
            <Icons iconKey={'shop'} style />
            <small className='count'>3</small>
          </a>
        </li>
        <li className='menu-item-has-children'>
          <a href='#'>
            <Icons iconKey={'heart'} style />
          </a>
        </li>
        <li className='menu-item-has-children'>
          <a href='#'>
            <Icons iconKey={'compare'} style />
            <small className='count'>2</small>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default GroupButton;
