import {
  Autocomplete as OAutocomplete,
  AutocompleteSection as OAutocompleteSection,
  AutocompleteItem as OAutocompleteItem,
  extendVariants,
} from '@nextui-org/react';

export const Autocomplete = extendVariants(OAutocomplete, {
  defaultVariants: {
    size: 'md',
    labelPlacement: 'inside',
    variant: 'bordered',
    color: 'secondary',
  },
});

export const AutocompleteSection = extendVariants(OAutocompleteSection, {
  defaultVariants: {},
});

export const AutocompleteItem = extendVariants(OAutocompleteItem, {
  defaultVariants: {},
});
