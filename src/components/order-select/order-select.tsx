import React, { FC } from 'react';
import OrderEnum from '@/emums/order-enum'

import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import styled from '@emotion/styled';

export interface OrderSelectProps {
    onOrderChange(type: OrderEnum): void
    order: OrderEnum
}

export interface OrderSelectType {
    id: number,
    type: OrderEnum,
    label: string
}

const orderTypes: OrderSelectType[] = [
    {
        id: 1,
        type: OrderEnum.ASC,
        label: "По возрастанию"
    },
    {
        id: 2,
        type: OrderEnum.DESC,
        label: "По убыванию"
    },
    {
        id: 3,
        type: OrderEnum.IMPORTANT,
        label: "Важные"
    }
]

const OrderSelectStyle = styled.div`
    margin-bottom: 5px;         
`;

const OrderSelect: FC<OrderSelectProps> = ({ onOrderChange, order }) => {

    const elements = orderTypes.map((item) => {

        const { id, type, label } = item;
        return (
            <MenuItem key={id}
                value={type}>
                {label}
            </MenuItem>
        );
    });

    return (
        <OrderSelectStyle>
            <FormControl variant="standard" size="small">
                <InputLabel id="labelId">Сортировка</InputLabel>
                <Select className="order-select"
                    labelId="labelId"
                    value={order}
                    onChange={(event) => onOrderChange(event.target.value as OrderEnum)}>
                    {elements}
                </Select>
            </FormControl>
        </OrderSelectStyle>
    );
}

export default OrderSelect;