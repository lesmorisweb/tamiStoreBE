import { Model, Table, Column, DataType, HasMany, BelongsTo } from "sequelize-typescript";
import { Message } from "./Message";
import { BuysAndReviews } from "./Buys&Reviews";

@Table
export class User extends Model<User, IUser> {
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
        unique: true,
    })
    declare email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare country: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare address: string[];

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare phone: string;

    @Column({
        type: DataType.ENUM("buyer", "seller"),
        allowNull: false,
    })
    declare accountType: AccountType;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    declare credits: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare cuppons: string[];

    @Column({
        type: DataType.JSON,
        allowNull: false,
    })
    declare friends: User[];

    @Column({
        type: DataType.JSON,
        allowNull: false,
    })
    declare messages: Message[];

    @HasMany(()=> Message, {
        foreignKey: "senderId"
    })
    declare sentMessages: Message[];

    @BelongsTo(()=> Message, {
        foreignKey: "receiverId"
    })
    declare receivedMessages: Message[];

    @BelongsTo(()=>BuysAndReviews,{
        foreignKey: "userId"
    })
    declare buysAndReviews: BuysAndReviews;

    
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    country: string;
    address: string[];
    phone: string;
    accountType: AccountType;
    credits: number;
    cuppons: string[];
    friends: User[];
    messages: Message[];
}

export enum AccountType {
    Buyer = "buyer",
    Seller = "seller",
}


