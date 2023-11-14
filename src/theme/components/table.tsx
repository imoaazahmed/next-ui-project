import {
  Table as OTable,
  TableHeader as OTableHeader,
  TableBody as OTableBody,
  TableColumn as OTableColumn,
  TableRow as OTableRow,
  TableCell as OTableCell,
  extendVariants,
} from '@nextui-org/react';

export const Table = extendVariants(OTable, {
  defaultVariants: {},
});

export const TableHeader = OTableHeader;

export const TableBody = OTableBody;

export const TableColumn = OTableColumn;

export const TableRow = OTableRow;

export const TableCell = OTableCell;
