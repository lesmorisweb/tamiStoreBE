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
    declare image: string;

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

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare category: Category;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    declare like: boolean;
}

export interface IProduct {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    sellerId: number;
    stock: number;
    category: Category;
    like: boolean;
}

export enum Category { 
    Electronics = "electronics",
    Clothing = "clothing",
    Home = "home",
    Books = "books",
    Toys = "toys",
    Sports = "sports",
    Beauty = "beauty",
    Automotive = "automotive",
    Grocery = "grocery",
    Health = "health",
}