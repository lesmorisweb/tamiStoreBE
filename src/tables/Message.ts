import { BelongsTo, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "./Users/User";


@Table

export class Message extends Model<Message, IMessage> {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: "id",
        },
    })
    declare senderId: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: "id",
        },
    })
    declare receiverId: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare content: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    declare timestamp: Date;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    declare readded: boolean;

    @BelongsTo(() => User, {
        foreignKey: "senderId",
    })
    declare sender: User;

    @BelongsTo(() => User, {
        foreignKey: "receiverId",
    })
    declare receiver: User;

}


export type IMessage = {
    senderId: number;
    receiverId: number;
    content: string;
    timestamp: Date;
    readded: boolean;
}