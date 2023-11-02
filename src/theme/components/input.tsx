import { Input as OInput, extendVariants } from '@nextui-org/react';

export const Input = extendVariants(OInput, {
  defaultVariants: {
    size: 'md',
    labelPlacement: 'inside',
    variant: 'bordered',
    color: 'secondary',
  },
});
