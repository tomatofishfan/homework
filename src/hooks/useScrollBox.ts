// https://dev.to/murilovarela/an-easy-scroll-box-implementation-2b6a

import { useState, useEffect, SetStateAction } from 'react';

const useScrollBox = (scrollRef: any) => {
  const [clickStartX, setClickStartX] = useState();
  const [scrollStartX, setScrollStartX] = useState();
  const [isDragging, setIsDragging] = useState(false);

  const scrollWrapperCurrent = scrollRef.current;

  useEffect(() => {
    if (scrollRef.current) {
      const handleDragStart = (e: { screenX: SetStateAction<undefined>; }) => {
        setClickStartX(e.screenX);
        setScrollStartX(scrollRef.current.scrollLeft);
      };

      const handleDragMove = (e: { preventDefault: () => void; stopPropagation: () => void; screenX: number; }) => {
        e.preventDefault();
        e.stopPropagation();

        if (clickStartX !== undefined && scrollStartX !== undefined) {
          const touchDelta = clickStartX - e.screenX;
          scrollRef.current.scrollLeft = scrollStartX + touchDelta;

          if (Math.abs(touchDelta) > 1) {
            setIsDragging(true);
          }
        }
      };

      const handleDragEnd = () => {
        if (isDragging && clickStartX !== undefined) {
          setClickStartX(undefined);
          setScrollStartX(undefined);
          setIsDragging(false);
        }
      };

      if (scrollRef.current.ontouchstart === undefined) {
        scrollRef.current.onmousedown = handleDragStart;
        scrollRef.current.onmousemove = handleDragMove;
        scrollRef.current.onmouseup = handleDragEnd;
        scrollRef.current.onmouseleave = handleDragEnd;
      }
    }
  }, [scrollWrapperCurrent, scrollRef, clickStartX, isDragging, scrollStartX]);

  return { isDragging };
}

export default useScrollBox;