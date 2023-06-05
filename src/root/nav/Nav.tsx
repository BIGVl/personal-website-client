import { Link } from 'react-router-dom';
import './Nav.scss';
import { HashLink } from 'react-router-hash-link';
import { MouseEvent, useState } from 'react';

export default function Nav() {
  const [indicatorStyle, setIndicatorStyle] = useState({});

  const onLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLElement;
    const { left, width } = target.getBoundingClientRect();
    console.log(left);
    const newIndicatorStyle = {
      left: `${left}px`,
      width: `${width}px`
    };
    setIndicatorStyle(newIndicatorStyle);
  };

  return (
    <nav>
      <Link to={'/'} className="logo">
        Vlasa Andrei
      </Link>
      <ul className="links">
        <li>
          <HashLink onClick={onLinkClick} smooth to={'/#about'}>
            About
          </HashLink>
        </li>
        <li>
          <HashLink onClick={onLinkClick} to={'/#projects'}>
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink onClick={onLinkClick} to={'/#contact'}>
            Contact
          </HashLink>
        </li>
        <li>
          <Link onClick={onLinkClick} to={'/blog'}>
            Blog
          </Link>
        </li>
      </ul>
      <div className="indicator" style={indicatorStyle}>
        <div className="circle"></div>
      </div>
    </nav>
  );
}
