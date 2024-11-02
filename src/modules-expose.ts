import { DynamicModule, ForwardReference, Type } from '@nestjs/common';

export const moduleList: (
  | Type<any>
  | DynamicModule
  | Promise<DynamicModule>
  | ForwardReference<any>
)[] = [];
