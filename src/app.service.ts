import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';


    //  const url = `../get-student?firstName=${firstName}&lastName=${lastName}`;
    //  const response = await this.http.get(url).toPromise();
    // the url variable 
  }
}
