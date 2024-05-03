import { HttpException, HttpStatus } from "@nestjs/common";


export class NoExistentCourse extends HttpException {
    constructor() {
      super('This Course Does Not Exist', HttpStatus.BAD_REQUEST);
    }
}