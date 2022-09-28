import { Aside } from './Aside';
import { Calculator } from './Calculator';
import { Header } from './Header';

export const App = () => {
  return (
    <>
      <Header />
      <div className="bg-theme h-max min-h-screen py-10">
        <div className="container mx-auto max-w-5xl grid grid-cols-3">
          <Aside />
          <Calculator />
        </div>
      </div>
    </>
  );
};
