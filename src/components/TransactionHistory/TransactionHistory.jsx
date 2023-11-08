import {
  Table,
  TableHeader,
  TableHeaderRow,
  TableHeaderCell,
  TableBody,
  TableBodyRow,
  TableBodyCell,
} from './TransactionHistoryStyled';

const TransactionHistory = ({ items }) => (
  <Table className="transaction-history">
    <TableHeader>
      <TableHeaderRow>
        <TableHeaderCell>Type</TableHeaderCell>
        <TableHeaderCell>Amount</TableHeaderCell>
        <TableHeaderCell>Currency</TableHeaderCell>
      </TableHeaderRow>
    </TableHeader>
    <TableBody>
      {items.map(item => (
        <TableBodyRow key={item.id}>
          <TableBodyCell>{item.type}</TableBodyCell>
          <TableBodyCell>{item.amount}</TableBodyCell>
          <TableBodyCell>{item.currency}</TableBodyCell>
        </TableBodyRow>
      ))}
    </TableBody>
  </Table>
);

export default TransactionHistory;
