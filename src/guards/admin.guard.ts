import { CanActivate, ExecutionContext } from '@nestjs/common';

export class AdminGuard implements CanActivate {

  // canActivate() function. This function should return a boolean, indicating whether the current request is allowed or not.
  // It can return the response either synchronously or asynchronously (via a Promise or Observable). 
  // Nest uses the return value to control the next action:
  // if it returns true, the request will be processed.
  // if it returns false, Nest will deny the request.

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    // The host.switchToHttp() helper call returns an HttpArgumentsHost object that is appropriate for the HTTP application context. 
    // The HttpArgumentsHost object has two useful methods we can use to extract the desired objects.

    
    if (!request.currentUser) {
      return false;
    }

    return request.currentUser.admin;
  }
}
