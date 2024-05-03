import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({timestamps: true})
export class User {
    @Prop()
    nome: string

    @Prop()
    sobrenome: string

    @Prop()
    email: string

    @Prop()
    senha: string
}

export const UserSchema = SchemaFactory.createForClass(User);

