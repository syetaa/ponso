const saveValue = (id, value) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(`test_${id}`, value);
    }
  };
  
  export default saveValue;
  