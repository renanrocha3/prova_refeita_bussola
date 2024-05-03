import { IsString, IsNumber, IsArray  } from "class-validator"
import { User } from "src/users/schemas/user.schema"

export class CreateCourseDto {
    @IsString()
    nome: string

    @IsNumber()
    valor: number

    @IsNumber()
    duracao: number
}
