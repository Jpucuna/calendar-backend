import { IsDateString, IsNotEmpty, IsString } from 'class-validator';
export class UpdateHolidayDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsDateString()
  start_Date: Date;

  @IsNotEmpty()
  @IsDateString()
  end_date: Date;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  is_recoverable: boolean;
}
