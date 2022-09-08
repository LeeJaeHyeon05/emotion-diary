import {Link} from 'react-router-dom'

const RouteTest = () => {
  return <>
    <Link to={'/'}>HOME</Link>
    <br />
    <Link to={'/diary'}>DIARY</Link>
    <br />
    <Link to={'/new'}>new</Link>
    <br />
    <Link to={'/edit'}>edit</Link>
  </>;
};

export default RouteTest;
