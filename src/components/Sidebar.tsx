import { IonIcon } from '@ionic/react';
import React from 'react';
import { categories } from '../constants/categories';
import { useGlobalContext } from '../context';
import './css/sidebar.css';

const Sidebar = () => {
  const { activeCategory, setAppState } = useGlobalContext();

  const setCategoryHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = e.target as Element;

    setAppState((prev) => {
      return {
        ...prev,
        activeCategory: target.textContent as string,
        searchTerm: target.textContent as string,
      };
    });
  };

  return (
    <aside>
      {categories.map((category, i) => {
        const { icon, name } = category;

        return (
          <button
            key={i}
            className={
              activeCategory === name
                ? 'category-sidebar category-active'
                : 'category-sidebar'
            }
            onClick={setCategoryHandler}
          >
            <IonIcon
              className={
                activeCategory === name
                  ? 'icon-sidebar icon-active'
                  : 'icon-sidebar'
              }
              icon={icon}
            />
            <p className="category-name">{name}</p>
          </button>
        );
      })}
    </aside>
  );
};

export default Sidebar;
