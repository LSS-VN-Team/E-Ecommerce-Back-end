import { createParamDecorator, ExecutionContext } from '@nestjs/common';

type UserField = 'id' | 'role';

export const CurrentUser = createParamDecorator(
  (data: UserField, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    return data ? user?.[data] : user;
  },
);
