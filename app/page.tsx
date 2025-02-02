import Intro from './components/intro';
import Hero from './components/hero';
import ParentComponent from './components/ParentCoponent';

export default function Home() {
  return (
    <>
      <Intro />
      <ParentComponent />
    </>
  );
}
