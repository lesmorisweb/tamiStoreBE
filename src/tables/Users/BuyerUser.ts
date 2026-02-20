import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Invoice } from "../Invoice";
import { User } from "./User";


@Table
export class BuyerUser extends User {

    @Column({
        type: DataType.ARRAY(DataType.INTEGER),
        allowNull: false,
    })
    declare purchases: Invoice[];

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    declare credits?: number;

    @Column({
        type: DataType.ARRAY(DataType.STRING),
        allowNull: true,
    })
    declare cuppons?: number[];
}

export interface IBuyerUser extends User {
    purchases: Invoice[];
    credits?: number;
    cuppons?: number[];
}