import { BelongsTo, Column, DataType, Model, Table } from "sequelize-typescript";
import { Product } from "./Product";
import { SellerUser } from "./Users/SellerUser";
import { BuyerUser } from "./Users/BuyerUser";


@Table
export class Invoice extends Model<Invoice, IInvoice> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    declare invoiceId: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    declare sellerId: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    declare buyerId: number;

    @Column({
        type: DataType.JSON,
        allowNull: false,
    })
    declare productsSold: Product[];

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    declare totalAmount: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    declare date: Date;

    @BelongsTo(()=> SellerUser, {
        foreignKey: "sellerId",
    })
    declare seller: SellerUser;

    @BelongsTo(()=> BuyerUser, {
        foreignKey: "buyerId",
    })
    declare buyer: BuyerUser;
}

export interface IInvoice {
    invoiceId: number;
    sellerId: number;
    buyerId: number;
    productsSold: Product[];
    totalAmount: number;
    date: Date;
}