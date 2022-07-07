import { useState, useEffect } from "react";

const useAsync = (getMethod) => {

  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [apiCallInit, setApiCallInit] = useState(false)


    const getResource = async () => {
       
      try {
        setLoading(true);
        const result = await getMethod();
        setValue(result);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
  }
  useEffect(() => {
    if(!apiCallInit) {
        getResource()
        setApiCallInit(prev => true)}
  }, [apiCallInit]);

  return {value, error,loading};
};

export default useAsync;