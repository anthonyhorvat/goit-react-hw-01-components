import styled from 'styled-components';

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

const Table = styled.table`
  margin: 0 auto;
  width: 600px;
  border-collapse: collapse;
  font-size: 16px;
  margin-top: 50px;
  border: 1px solid #ddd;
  font-family: 'Arial', sans-serif;
`;

const TableHeader = styled.thead`
  background-color: #b5e7ff;
`;

const TableHeaderRow = styled.tr``;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: center;
  font-weight: bold;
  border: 1px solid #fff;
  color: #333;
`;

const TableBody = styled.tbody``;

const TableBodyRow = styled.tr`
  text-transform: capitalize;
  &:nth-child(odd) {
    background-color: #fff;
  }

  &:nth-child(even) {
    background-color: #f5f5f5;
  }

  border: 1px solid #ddd;
`;

const TableBodyCell = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
  color: #555;
`;
