import * as React from 'react';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'primary', ...props }, ref) => {
        const base = 'px-4 py-2 rounded-lg text-sm font-semibold transition';

        const variants = {
        primary:
            'bg-amber-600 text-white hover:bg-amber-700',
        secondary:
            'bg-gray-200 text-gray-800 hover:bg-gray-300',
        };

        return (
        <button
            ref={ref}
            className={`${base} ${variants[variant]} ${className}`}
            {...props}
        />
        );
    }
);

Button.displayName = 'Button';
