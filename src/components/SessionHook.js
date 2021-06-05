import React, { useState } from 'react';

const useSessionStorage = localStorageKey => {
    const [value, setValue] = useState(
        sessionStorage.getItem(localStorageKey) || ''
    );

    React.useEffect(() => {
        sessionStorage.setItem(localStorageKey, value);
    }, [value]);

    return [value, setValue];
};

export default useSessionStorage;