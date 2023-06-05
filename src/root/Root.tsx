import { Outlet } from 'react-router-dom';
import Nav from './nav/Nav';

export default function Root() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}
