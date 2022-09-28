import { useState } from 'react';
import { AsideMenuItem } from './AsideMenuItem';
import { FormulaMenu } from '../models/FormulaMenu';

import formulas from '../api/formulas.json';

export const Aside = () => {
  const [formulasMenu, setFormulasMenu] = useState<Array<FormulaMenu>>(formulas);

  return (
    <aside className="col-span-1">
      <ul>
        {formulasMenu.map(({ id, label, options }) => (
          <AsideMenuItem label={label} options={options} key={id} />
        ))}
      </ul>
    </aside>
  );
};
