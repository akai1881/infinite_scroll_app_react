import React from 'react';

export const ErrorText = ({ text = 'An error occurred' }) => {
    return (
        <div className="text-red-600 bg-red-100 border border-red-300 rounded p-2 my-2 text-sm font-semibold text-center">
            {text}
        </div>
    );
};
