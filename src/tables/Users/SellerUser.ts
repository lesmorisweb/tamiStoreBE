import { Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "./User";
import { Product } from "../Product";
import { Invoice } from "../Invoice";


@Table
export class SellerUser extends User {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
    })
    declare sellerId: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare companyName: string;

    @Column({
        type: DataType.ARRAY(DataType.INTEGER),
        allowNull: false,
    })
    declare productsSold: Product[];

    @Column({
        type: DataType.ARRAY(DataType.INTEGER),
        allowNull: false,
    })
    declare productsForSale: Product[];

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    declare income: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    declare invoice: Invoice;

}

export interface ISellerUser extends User {
    sellerId: number;
    companyName: string;
    productsSold: Product[];
    productsForSale: Product[];
    income: number;
    invoice: Invoice;
}