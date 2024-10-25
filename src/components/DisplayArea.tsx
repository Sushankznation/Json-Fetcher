import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useAppContext } from '../context/AppContext';

const DisplayArea: React.FC = () => {
    const { jsonData, renderType } = useAppContext();

    const JSONtoHTML = (data: any): string => {
        return `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    };

    const renderContent = () => {
        if (renderType === 'HTML') {
            return (
                <div
                    className="bg-white p-4 rounded-lg shadow-md whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: JSONtoHTML(jsonData) }}
                />
            );
        } else if (renderType === 'Markdown') {
            return (
                <ReactMarkdown className="bg-white p-4 rounded-lg shadow-md whitespace-pre-wrap">
                    {JSON.stringify(jsonData)}
                </ReactMarkdown>
            );
        }
    };

    return (
        <div className="w-full max-h-[400px] overflow-hidden bg-gray-100 p-4 rounded-lg shadow-lg mt-4 whitespace-pre-wrap">
            {renderContent()}
        </div>
    );
};

export default DisplayArea;
