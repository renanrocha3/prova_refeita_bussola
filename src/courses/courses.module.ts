import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { Course, CourseSchema } from './schemas/course.schema';
import { DiscountMiddleware } from './middlewares/discount.middleware';

@Module({
  imports: [MongooseModule.forFeature([{name: Course.name, schema: CourseSchema}])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(DiscountMiddleware)
      .forRoutes({path: 'courses', method: RequestMethod.POST})
  }
}
