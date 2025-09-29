import { useEffect, useRef } from 'react';

const useUpdateEffect = (callback, deps) => {
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      // 如果是第一次就把isFirst设置为false，直接return，不执行副作用
      return;
    }
    return callback();
  }, deps);
};
export default useUpdateEffect;
