import Horizontal from './Horizontal';
import Vertical from './Vertical';

const Menu = () => {
  return (
    <div className='menu-main-wrapper border-top border-bottom m-t-40'>
      <div className='row flex align-center'>
        <Vertical />
        <Horizontal />
      </div>
    </div>
  );
};

export default Menu;
