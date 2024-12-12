
import { cva } from 'class-variance-authority';


export const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
    {
        variants: {
            variant: {
                default: 'bg-primary text-primary-foreground hover:bg-primary/90', // Default button style
                secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80', // Secondary button style
                outline: 'border border-input bg-background hover:bg-accent', // Outline button style
            },
            size: {
                default: 'h-10 px-4 py-2', // Default button size
                sm: 'h-9 px-3', // Small button size
                lg: 'h-11 px-8', // Large button size
            },
        },
        defaultVariants: {
            variant: 'default', // Default variant
            size: 'default', // Default size
        },
    }
);