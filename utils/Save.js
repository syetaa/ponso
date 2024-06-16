function saveValue(test_id, value) {
    localStorage.setItem(`test_${test_id}`, value);
};

export default saveValue;