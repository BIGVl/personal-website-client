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
    console.log(left, width);
    const newIndicatorStyle = {
      //Substracting the padding left and right of the 'a' element in order to have the indicator exactly as big as the text content, not the whole element
      width: `${width - 32}px`,
      left: `${left}px`
    };
    setIndicatorStyle(newIndicatorStyle);
  };

  return (
    <header>
      <div className="wrapper-relative">
        <Link to={'/'} className="logo">
          Vlasa Andrei
        </Link>
        <nav>
          <ul className="links">
            <li>
              <HashLink
                onClick={onLinkClick}
                scroll={(e) => e.scrollIntoView({ block: 'center', behavior: 'smooth' })}
                smooth
                to={'/#about'}
                className={activeLink === '/#about' ? 'active' : ''}
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink onClick={onLinkClick} smooth to={'/#projects'} className={activeLink === '/#projects' ? 'active' : ''}>
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink onClick={onLinkClick} smooth to={'/#contact'} className={activeLink === '/#contact' ? 'active' : ''}>
                Contact
              </HashLink>
            </li>
            <li>
              <Link onClick={onLinkClick} to={'/blog'} className={activeLink === '/blog' ? 'active' : ''}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <div className={`indicator ${!activeLink && 'invisible'} `} style={indicatorStyle}>
          <div className="circle"></div>
        </div>
      </div>
    </header>
  );
}
