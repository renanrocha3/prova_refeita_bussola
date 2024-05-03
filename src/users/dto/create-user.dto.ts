import { IsString, IsEmail } from "class-validator"


export class CreateUserDto {
    @IsString()
    nome: string

    @IsString()
    sobrenome: string

    @IsString()
    @IsEmail()
    email: string

    @IsString()
    senha: string
}
