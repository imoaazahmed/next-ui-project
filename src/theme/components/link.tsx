import { Link as OLink, extendVariants } from '@nextui-org/react';

export const Link = extendVariants(OLink, {
  defaultVariants: {
    color: 'primary',
  },
});
