import { IonIcon } from '@ionic/react';
import { categories } from '../constants/categories';
import { useGlobalContext } from '../context';
import './sidebar.css';

const Sidebar = () => {
  const { activeCategory } = useGlobalContext();

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
