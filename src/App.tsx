import React from 'react';
import { AppProvider } from './context/AppContext';
import JsonInput from './components/JsonInput';
import DisplayArea from './components/DisplayArea';
import RenderOptions from './components/RenderOptions';

const App: React.FC = () => {
    return (
        <AppProvider>
            <div className="p-5">
                <h1 className="text-2xl font-bold mb-4">JSON Viewer</h1>
                <div className=" md:flex space-x-5">
                    <JsonInput />
                    <RenderOptions />
                </div>
                <DisplayArea />
            </div>
        </AppProvider>
    );
};

export default App;
