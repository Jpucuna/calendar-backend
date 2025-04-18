import { Module } from '@nestjs/common';
import { HolidayService } from './holidays.service';
import { HolidayController } from './holidays.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Holiday } from './holidays.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Holiday])],
  providers: [HolidayService],
  controllers: [HolidayController],
})
export class HolidaysModule {}
