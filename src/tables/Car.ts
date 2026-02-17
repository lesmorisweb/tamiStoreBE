import { Column, DataType, Model, Table, } from "sequelize-typescript";
import { Product } from "./Product";


@Table

export class BuysAndReviews extends Model<BuysAndReviews, IBuysAndReviews> {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    declare id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    declare userId: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare carName: string;

    @Column({
        type: DataType.JSON,
        allowNull: false,
    })
    declare products: Product[];

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    declare amountToBuy: number;
}

export interface IBuysAndReviews {
    id: number;
    userId: number;
    carName: string;
    products: Product[];
    amountToBuy: number;
}