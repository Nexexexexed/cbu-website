import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Прокручиваем страницу в самый верх при каждом изменении маршрута
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // или 'smooth' для плавной прокрутки
    });
  }, [pathname]);

  return null; // Этот компонент ничего не рендерит
};

export default ScrollToTop;