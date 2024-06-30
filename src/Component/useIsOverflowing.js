import { useState, useEffect } from 'react';

const useIsOverflowing = (ref) => {
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (ref.current) {
        const { clientHeight, scrollHeight, clientWidth, scrollWidth } = ref.current;
        setIsOverflowing(scrollHeight > clientHeight || scrollWidth > clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => window.removeEventListener('resize', checkOverflow);
  }, [ref]);

  return isOverflowing;
};

export default useIsOverflowing;
