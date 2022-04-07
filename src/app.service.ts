import { Injectable } from '@nestjs/common';
import { MyLibraryService } from '@my-company/app-and-lib/libs/my-library/src/my-library.service';

@Injectable()
export class AppService {
  constructor(private myLibraryService: MyLibraryService) {}

  getHello(): string {
    return this.myLibraryService.getHelloFromLibrary();
  }
}
