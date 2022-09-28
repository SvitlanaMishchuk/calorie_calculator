import { useState } from 'react';
import { Icon } from './Icon';
import { CHEVRON_DOWN, CHEVRON_UP } from './Icon/IconsList';

interface AsideMenuItemProps {
  label: string;
  options?: Array<{ id: string; label: string }> | undefined;
}

export const AsideMenuItem = ({ label, options }: AsideMenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const getItemOptions = () => {
    return (
      <ul className="ml-4 mt-3">
        {options?.map(({ id, label }) => (
          <li key={id} className="mt-2 hover:text-secondary hover:underline">
            {label}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <li
        className={`py-4 mr-4 border-b border-primary w-4/5 hover:cursor-pointer ${
          !options?.length ? 'hover:text-secondary hover:underline' : ''
        }`}
      >
        <span className="flex justify-between items-center text-xl font-serif" onClick={() => setIsOpen(!isOpen)}>
          <span>{label}</span>
          {options?.length ? <Icon icon={isOpen ? CHEVRON_UP : CHEVRON_DOWN} className="w-4 h-4" /> : null}
        </span>
        {isOpen && options?.length ? getItemOptions() : null}
      </li>
    </>
  );
};
