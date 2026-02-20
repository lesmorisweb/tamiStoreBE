import { Model, Table } from "sequelize-typescript";
import { Product } from "./Product";


@Table
export class Invoice extends Model<Invoice, IInvoice> {

}

export interface IInvoice {
    invoiceId: number;
    sellerId: number;
    buyerId: number;
    productsSold: Product[];
    totalAmount: number;
    date: Date;
}