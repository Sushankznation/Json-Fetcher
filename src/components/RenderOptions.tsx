import React from 'react';
import { useAppContext } from '../context/AppContext';

const RenderOptions: React.FC = () => {
    const { renderType, setRenderType } = useAppContext();

    return (
        <div className="p-3">
            <label className="inline-flex items-center">
                <input
                    type="radio"
                    checked={renderType === 'HTML'}
                    onChange={() => setRenderType('HTML')}
                    className="mr-2"
                />
                HTML
            </label>
            <label className="inline-flex items-center ml-4">
                <input
                    type="radio"
                    checked={renderType === 'Markdown'}
                    onChange={() => setRenderType('Markdown')}
                    className="mr-2"
                />
                Markdown
            </label>
        </div>
    );
};

export default RenderOptions;
