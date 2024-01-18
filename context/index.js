import React, { createContext, useContext, useState } from 'react';

const ThreeObjectContext = createContext();

export const useThreeObject = () => useContext(ThreeObjectContext);

export const ThreeObjectProvider = ({ children }) => {
    const [juiceObject, setJuiceObject] = useState(null);
    const [loaded, setLoaded] = useState(null);

    return (
        <ThreeObjectContext.Provider value={{ juiceObject, setJuiceObject, setLoaded, loaded }}>
            {children}
        </ThreeObjectContext.Provider>
    );
};