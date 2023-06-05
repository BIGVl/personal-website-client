import About from './about/About';
import './Home.scss';

export default function Home() {
  return (
    <div className="home">
      <div> This is home </div>
      <About />
    </div>
  );
}
