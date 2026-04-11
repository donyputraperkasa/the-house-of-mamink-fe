import * as React from 'react';

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<
    HTMLTextAreaElement,
    TextareaProps
>(({ className = '', ...props }, ref) => {
    return (
        <textarea
        ref={ref}
        className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${className}`}
        {...props}
        />
    );
});

Textarea.displayName = 'Textarea';
