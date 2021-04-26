/* eslint-disable prefer-spread */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useSelector } from 'react-redux';
import Title from './Title';

const rows = [];

export default function Orders() {
  const data = useSelector((state) => state.allOrder);

  const [orderData, setOrderData] = React.useState([]);

  const order = data.map((el) =>
    el.foodOrdered.map((item) => [
      {
        ...item,
        name: el.name,
        address: el.roadNo,
        contacts: el.contacts,
      },
    ])
  );
  const order2 = [].concat.apply([], order);

  React.useEffect(() => {
    setOrderData([].concat.apply([], order2));
  }, [data]);

  const lastTenOrder = orderData.slice(Math.max(orderData.length - 10, 0));
  return (
    <div>
      <Title>Recent Ten Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Cell Phone</TableCell>
            <TableCell>Ordered</TableCell>
            <TableCell>Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lastTenOrder.map((row) => (
            // eslint-disable-next-line react/jsx-key
            <TableRow>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.contacts}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center">{row.quantity * row.price}</TableCell>
              <TableCell align="right">{row.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
