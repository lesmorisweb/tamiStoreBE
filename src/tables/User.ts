import { Model, Table, Column, DataType } from "sequelize-typescript";

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

}

export interface IUser {
    id: number;
    name: string;
    email: string;
    country: string;
    address: string[];
    phone: string;
    accountType: AccountType;
}

export type AccountType = "buyer" | "seller";
