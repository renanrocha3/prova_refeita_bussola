import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt'

const saltOrRounds = 10;

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.senha = await bcrypt.hash(createUserDto.senha, saltOrRounds)
    const createdUser = await this.userModel.create(createUserDto)
    return createdUser
  }

  async findAll(): Promise<User[]> {
    const Users = await this.userModel.find().select('-senha')
    return Users
  }

  async findOneById(id: string): Promise<User> {
    const User = await this.userModel.findById(id).select('-senha');
    return User
  }

  async findOneByEmail(email: string): Promise<User> {
    const User = await this.userModel.findOne({email: email});
    return User
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  async remove(id: string) {
    await this.userModel.findByIdAndDelete(id);
  }
}
