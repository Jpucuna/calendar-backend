// src/holidays/dto/create-holiday.dto.ts

import {
  IsString,
  IsDate,
  IsEnum,
  IsBoolean,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { HolidayType } from '../holidays.entity';

export class CreateHolidayDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @Type(() => Date)
  @IsDate()
  startDate: Date;

  @Type(() => Date)
  @IsDate()
  endDate: Date;

  @IsEnum(HolidayType)
  type: HolidayType;

  @IsBoolean()
  isRecoverable: boolean;
}
