import {
  Dropdown as ODropdown,
  DropdownTrigger as ODropdownTrigger,
  DropdownMenu as ODropdownMenu,
  DropdownSection as ODropdownSection,
  DropdownItem as ODropdownItem,
  extendVariants,
} from '@nextui-org/react';

export const Dropdown = extendVariants(ODropdown, {
  defaultVariants: {},
});

export const DropdownTrigger = extendVariants(ODropdownTrigger, {
  defaultVariants: {},
});

export const DropdownMenu = extendVariants(ODropdownMenu, {
  defaultVariants: {},
});

export const DropdownSection = ODropdownSection;

export const DropdownItem = ODropdownItem;
