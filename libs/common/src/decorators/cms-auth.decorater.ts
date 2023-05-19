import { JwtAuthGuard, RolesGuard } from '@app/core';
import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';

import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Role } from '../enums';

export const CmsAuth = (...roles: Role[]) => {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(JwtAuthGuard, RolesGuard),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({
      description: 'Unauthorized',
    }),
  );
};
