import { Injectable } from '@nestjs/common';
import { MyLibraryService } from '@my-company/app-and-lib/dist/libs/my-library/my-library.service';

@Injectable()
export class AppService {
  constructor(private myLibraryService: MyLibraryService) {}

  getHello() {
    return this.myLibraryService.getHelloFromLibrary();
  }
}
