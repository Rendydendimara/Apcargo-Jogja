import Button from '@mui/material/Button';
import { Flex } from '@chakra-ui/layout';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import React from 'react';
import { convertUSDFormat } from '../../../App';
import style from './style.module.css';

interface IProps {
  id?: number;
  name: string;
  total?: string;
  nominal?: string;
  kurs?: string;
  nominalDolar?: string;
  haveAction?: boolean;
  isHumico?: boolean;
  customerID?: any | string | null;
  qty?: number;
  percentage?: number;
  valueAddedTax?: string;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
  isCustom?: boolean;
  currency?: string;
  price?: number;
  totalIDR?: number;
  totalUSD?: number;
  grandTotal?: number;
  tax?: number;
}

const TdTabelDetail: React.FC<IProps> = (props) => {
  const handleEdit = () => {
    if (props.haveAction && props.onEdit) {
      props.onEdit(Number(props.id) ?? 0);
    }
  };
  const handleDelete = () => {
    if (props.haveAction && props.onDelete) {
      props.onDelete(Number(props.id) ?? 0);
    }
  };

  if (props.isHumico) {
    return (
      <TableRow
        key={new Date().getTime()}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell className={style.dataTabelDetail}>
          {props.name.replaceAll('_', ' ')}
        </TableCell>
        <TableCell align='left' className={style.dataTabelDetail}>
          {props.total ? props.total : 0}
        </TableCell>
      </TableRow>
    );
  }

  if (props.isCustom) {
    return (
      <TableRow
        key={new Date().getTime()}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        {/* <TableCell className={style.dataTabelDetail}>
          {props.customerID ? props.customerID.label : '-'}
        </TableCell> */}
        <TableCell align='left' className={style.dataTabelDetail}>
          {props.name.replaceAll('_', ' ')}
        </TableCell>
        <TableCell align='left' className={style.dataTabelDetail}>
          {props.qty ? props.qty : 0}
        </TableCell>
        <TableCell align='left' className={style.dataTabelDetail}>
          {props.percentage ? `${props.percentage}%` : 0}
        </TableCell>
        <TableCell align='left' className={style.dataTabelDetail}>
          {props.currency}
        </TableCell>
        <TableCell align='left' className={style.dataTabelDetail}>
          {props.price}
        </TableCell>
        <TableCell align='left' className={style.dataTabelDetail}>
          {props.kurs ? props.kurs : '-'}
        </TableCell>
        <TableCell align='left' className={style.dataTabelDetail}>
          {props.totalIDR}
        </TableCell>
        <TableCell align='left' className={style.dataTabelDetail}>
          {props.totalUSD}
        </TableCell>
        <TableCell align='left' className={style.dataTabelDetail}>
          {props.grandTotal}
        </TableCell>
        <TableCell align='left' className={style.dataTabelDetail}>
          {props.tax !== undefined ? (props.tax > 0 ? props.tax : 0) : 0}
        </TableCell>
        <TableCell align='center' className={style.dataTabelDetail}>
          {props.haveAction && (
            <Flex justifyContent='center' alignItems='center' gridGap='15px'>
              {props.onEdit && (
                <Button
                  size='medium'
                  color='primary'
                  onClick={handleEdit}
                  style={{
                    backgroundColor: '#ED8936',
                    fontWeight: '600',
                    color: 'white',
                  }}
                >
                  Edit
                </Button>
              )}
              {props.onDelete && (
                <Button
                  size='medium'
                  color='primary'
                  onClick={handleDelete}
                  style={{
                    backgroundColor: '#F56565',
                    fontWeight: '600',
                    color: 'white',
                  }}
                >
                  Delete
                </Button>
              )}
            </Flex>
          )}
        </TableCell>
      </TableRow>
    );
  }

  return (
    <TableRow
      key={new Date().getTime()}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      {/* <TableCell className={style.dataTabelDetail}>
        {props.customerID ? props.customerID.label : '-'}
      </TableCell> */}
      <TableCell align='left' className={style.dataTabelDetail}>
        {props.name.replaceAll('_', ' ')}
      </TableCell>
      <TableCell align='left' className={style.dataTabelDetail}>
        {props.total ? props.total : 0}
      </TableCell>
      <TableCell align='left' className={style.dataTabelDetail}>
        {props.nominal ? props.nominal : 0}
      </TableCell>
      <TableCell align='left' className={style.dataTabelDetail}>
        {props.kurs ? props.kurs : 0}
      </TableCell>
      <TableCell align='left' className={style.dataTabelDetail}>
        {props.nominalDolar ? props.nominalDolar : 0}
      </TableCell>
      <TableCell align='left' className={style.dataTabelDetail}>
        {props.qty ? props.qty : 0}
      </TableCell>
      <TableCell align='left' className={style.dataTabelDetail}>
        {props.percentage ? props.percentage : 0}
      </TableCell>
      <TableCell align='left' className={style.dataTabelDetail}>
        {props.valueAddedTax ? props.valueAddedTax : '-'}
      </TableCell>
      <TableCell align='center' className={style.dataTabelDetail}>
        {props.haveAction && (
          <Flex justifyContent='center' alignItems='center' gridGap='15px'>
            {props.onEdit && (
              <Button
                size='medium'
                color='primary'
                onClick={handleEdit}
                style={{
                  backgroundColor: '#ED8936',
                  fontWeight: '600',
                  color: 'white',
                }}
              >
                Edit
              </Button>
            )}
            {props.onDelete && (
              <Button
                size='medium'
                color='primary'
                onClick={handleDelete}
                style={{
                  backgroundColor: '#F56565',
                  fontWeight: '600',
                  color: 'white',
                }}
              >
                Delete
              </Button>
            )}
          </Flex>
        )}
      </TableCell>
    </TableRow>
  );
};

export default TdTabelDetail;
