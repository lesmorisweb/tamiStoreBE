import { BelongsTo, Column, DataType, Model, Table } from "sequelize-typescript";
import { Product } from "./Product";
import { User } from "./Users/User";


@Table
export class Reviews extends Model<Reviews, IReviews> {
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
        type: DataType.DATE,
        allowNull: false,
    })
    declare date: Date;

    @Column({
        type: DataType.JSON,
        allowNull: false,
    })
    declare products: Product;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare review: string[];

    @BelongsTo(() => User, {
        foreignKey: "userId",
    })
    declare user: User;

    @BelongsTo(() => Product, {
        foreignKey: "productId",
    })
    declare product: Product;

}

export interface IReviews {
    id: number;
    userId: number;
    date: Date;
    products: Product;
    review: string[];
}