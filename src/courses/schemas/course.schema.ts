import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CourseDocument = HydratedDocument<Course>;

@Schema({timestamps: true})
export class Course {
    @Prop()
    nome: string

    @Prop()
    valor: number

    @Prop()
    duracao: number

    @Prop({default: []})
    alunos: Array<string>
}

export const CourseSchema = SchemaFactory.createForClass(Course);
