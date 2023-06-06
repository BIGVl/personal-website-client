import About from './about/About';
import './Home.scss';

export default function Home() {
  return (
    <div className="home">
      <About />
      <div className="introduce-projects">
        <span className="explore"> Explore the projects that I want to impress with ! </span>{' '}
        <span className="hope"> Hope it works &#128512; </span>
      </div>
    </div>
  );
}
