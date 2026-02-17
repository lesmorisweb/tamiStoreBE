import { Column, DataType, HasMany, Model, Table, } from "sequelize-typescript";
import { Product } from "./Product";


@Table

export class Car extends Model<Car, ICar> {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    declare carId: number;

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

    @HasMany(() => Product, {
        foreignKey: "productId",
    })
    declare product: Product[];
}

export interface ICar {
    carId: number;
    userId: number;
    carName: string;
    products: Product[];
    amountToBuy: number;
}