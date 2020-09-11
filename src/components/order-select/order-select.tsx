import React, { FC } from 'react';
import OrderEnum from '../../emums/order-enum'

import './order-select.css';

export interface OrderSelectProps {
    onOrderChange(type: OrderEnum): void
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

const OrderSelect: FC<OrderSelectProps> = ({ onOrderChange }) => {

    const elements = orderTypes.map((item) => {

        const { id, type, label } = item;
        return (
            <option key={id}
                value={type}>
                {label}
            </option>
        );
    });

    return (
        <select className="order-select" onChange={(event) => onOrderChange(event.target.value as OrderEnum)}>
            {elements}
        </select>
    );
}

export default OrderSelect;