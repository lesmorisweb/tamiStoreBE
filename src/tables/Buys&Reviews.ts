import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
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
        type: DataType.DATE,
        allowNull: false,
    })
    declare date: Date;

    @Column({
        type: DataType.JSON,
        allowNull: false,
    })
    declare products: Product[];

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare review: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    declare carNumber: number;

    @HasMany(() => Product, {
        foreignKey: "productId",
    })
    declare product: Product[];
    

}

export interface IBuysAndReviews {
    id: number;
    userId: number;
    date: Date;
    products: Product[];
    review: string;
    carNumber: number;
}