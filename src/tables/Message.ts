import { Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "./User";


@Table

export class Message extends Model<Message, IMessage> {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    declare senderId: User["id"];

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    declare receiverId: User["id"];

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

}


export type IMessage = {
    senderId: User["id"];
    receiverId: User["id"];
    content: string;
    timestamp: Date;
    readded: boolean;
}