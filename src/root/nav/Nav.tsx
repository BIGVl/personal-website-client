import { Link } from 'react-router-dom';
import './Nav.scss';
import { HashLink } from 'react-router-hash-link';
import { MouseEvent, useState } from 'react';

export default function Nav() {
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [activeLink, setActiveLink] = useState('');

  const onLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLElement;
    setActiveLink(target.getAttribute('href') as string);
    const { left, width } = target.getBoundingClientRect();
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
          <HashLink onClick={onLinkClick} smooth to={'/#about'} className={activeLink === '/#about' ? 'active' : ''}>
            About
          </HashLink>
        </li>
        <li>
          <HashLink onClick={onLinkClick} to={'/#projects'} className={activeLink === '/#projects' ? 'active' : ''}>
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink onClick={onLinkClick} to={'/#contact'} className={activeLink === '/#contact' ? 'active' : ''}>
            Contact
          </HashLink>
        </li>
        <li>
          <Link onClick={onLinkClick} to={'/blog'} className={activeLink === '/blog' ? 'active' : ''}>
            Blog
          </Link>
        </li>
      </ul>
      <div className={`indicator ${!activeLink && 'invisible'} `} style={indicatorStyle}>
        <div className="circle"></div>
      </div>
    </nav>
  );
}
