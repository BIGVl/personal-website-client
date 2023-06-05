import { Link } from 'react-router-dom';
import './Nav.scss';
import { HashLink } from 'react-router-hash-link';

export default function Nav() {
  return (
    <nav>
      <ul className="links">
        <li>
          <HashLink smooth to={'/#about'}>
            About
          </HashLink>
        </li>
        <li>
          <HashLink to={'/#projects'}> Projects </HashLink>
        </li>
        <li>
          <HashLink to={'/#contact'}> Contact </HashLink>
        </li>
        <li>
          <Link to={'/blog'}> Blog </Link>
        </li>
      </ul>
    </nav>
  );
}
