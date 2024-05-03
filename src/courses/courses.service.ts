import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './schemas/course.schema';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { UsersService } from 'src/users/users.service';
import { map } from 'rxjs';
import { NoExistentCourse } from './exceptions/nocourse.exception';


@Injectable()
export class CoursesService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const createdCourse = await this.courseModel.create(createCourseDto)
    return createdCourse
  }

  async findAll(): Promise<Course[]> {
    const courses = await this.courseModel.find()
    return courses
  }

  async findOne(id: string): Promise<Course> {
    const course = await this.courseModel.findById(id);
    return course
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    await this.courseModel.findByIdAndUpdate(id, updateCourseDto);
  }

  async remove(id: string) {
    await this.courseModel.findByIdAndDelete(id);
  }

  async addStudent(courseId: string, studentId: string) {
    const course = await this.findOne(courseId)
    course.alunos.push(studentId)
    await this.update(courseId, course)
    return course
  }

  async findStudentsByCourseName(name: string) {
    const courses = await this.courseModel.find({nome: name})
    if (courses.length == 0) {
      throw new NoExistentCourse()
    }
    
    const alunos = courses.map(item => item.alunos)
    return alunos

  }

}
