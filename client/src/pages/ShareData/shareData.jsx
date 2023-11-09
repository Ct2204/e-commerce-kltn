import { useState } from 'react';

export const useSharedProductID = () => {
  const [productid, setProductid] = useState([]);

  return {
    productid,
    setProductid,
  };
};