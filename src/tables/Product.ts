import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Product extends Model<Product, IProduct> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    declare id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare description: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    declare price: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    declare sellerId: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    declare stock: number;
}

export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    sellerId: number;
    stock: number;
}