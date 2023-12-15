import AngleRight from './AngleRight';
import Compare from './Compare';
import Heart from './Heart';
import Shop from './Shop';
import User from './User';
import './index.css';

const Icons = ({iconKey, style}) => {
  const icons = {
    angleRight: <AngleRight />,
    compare: <Compare />,
    heart: <Heart />,
    shop: <Shop style={style} />,
    user: <User/>,
    newsPaper: <i className="pe7-icon pe-7s-news-paper" style={style}></i>,

  }
  return icons[iconKey]
}

export default Icons;