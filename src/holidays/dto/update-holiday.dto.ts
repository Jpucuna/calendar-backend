/* eslint-disable @typescript-eslint/no-unsafe-call */

import { IsDateString, IsNotEmpty, IsString } from 'class-validator';
export class UpdateHolidayDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsDateString()
  start_date: string;

  @IsNotEmpty()
  @IsDateString()
  end_date: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  is_recoverable: boolean;
}
