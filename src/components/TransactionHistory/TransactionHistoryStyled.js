import styled from 'styled-components';


export const Table = styled.table`
  margin: 0 auto;
  width: 600px;
  border-collapse: collapse;
  font-size: 16px;
  margin-top: 50px;
  border: 1px solid #ddd;
  font-family: 'Arial', sans-serif;
`;

export const TableHeader = styled.thead`
  background-color: #b5e7ff;
`;

export const TableHeaderRow = styled.tr``;

export const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: center;
  font-weight: bold;
  border: 1px solid #fff;
  color: #333;
`;

export const TableBody = styled.tbody``;

export const TableBodyRow = styled.tr`
  text-transform: capitalize;
  &:nth-child(odd) {
    background-color: #fff;
  }

  &:nth-child(even) {
    background-color: #f5f5f5;
  }

  border: 1px solid #ddd;
`;

export const TableBodyCell = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
  color: #555;
`;
