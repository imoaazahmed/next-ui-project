import { Button as OButton, extendVariants } from '@nextui-org/react';

export const Button = extendVariants(OButton, {
  defaultVariants: {
    size: 'md',
    variant: 'solid',
    color: 'default',
  },
});
