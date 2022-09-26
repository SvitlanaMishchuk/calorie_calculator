import { Aside } from './Aside';
import { Calculator } from './Calculator';
import { Header } from './Header';

export const App = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto max-w-5xl mt-10 grid grid-cols-3">
        <Aside/>
        <Calculator />
      </div>
    </>
  );
};
