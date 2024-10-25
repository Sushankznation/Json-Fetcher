import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
    jsonData: any;
    setJsonData: React.Dispatch<React.SetStateAction<any | null>>;
    renderType: 'HTML' | 'Markdown';
    setRenderType: React.Dispatch<React.SetStateAction<'HTML' | 'Markdown'>>;
    status: string;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [jsonData, setJsonData] = useState<any | null>(null);
    const [renderType, setRenderType] = useState<'HTML' | 'Markdown'>('HTML');
    const [status, setStatus] = useState<string>('');

    return (
        <AppContext.Provider value={{ jsonData, setJsonData, renderType, setRenderType, status, setStatus }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
