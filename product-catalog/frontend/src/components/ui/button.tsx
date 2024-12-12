import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
    {
        variants: {
            variant: {
                default: 'bg-primary text-primary-foreground hover:bg-primary/90',
                secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                outline: 'border border-input bg-background hover:bg-accent',
            },
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 px-3',
                lg: 'h-11 px-8',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);