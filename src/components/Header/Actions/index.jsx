import GroupButton from './GroupButton';
import SearchForm from './SearchForm';

const Actions = () => {
  return (
    <div className='row p-t-40'>
      <div className='header-wrap flex align-center'>
        <div className='logo-wrapper'>
          <img
            className='logo'
            src='/images/organic-logo.png'
            alt=''
            width='141px'
            height='35px'
          />
        </div>
        <SearchForm />
        <GroupButton />
      </div>
    </div>
  );
};

export default Actions;
