/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import { useSelector } from 'react-redux';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

export default function Customers() {
  const userData = useSelector((state) => state.allUserData);
  const rows = userData.slice(Math.max(userData.length - 5, 0));
  return (
    <div>
      <Title>Last Five Customers</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Contract No</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>555-555-555-55</TableCell>
              <TableCell align="right">$200</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
