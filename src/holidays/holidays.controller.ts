// src/holidays/holiday.controller.ts

import { Controller, Post, Get, Body, Param, Delete } from '@nestjs/common';
import { HolidayService } from './holidays.service';
import { CreateHolidayDto } from './dto/create-holiday.dto';
import { Holiday } from './holidays.entity';

@Controller('holidays')
export class HolidayController {
  constructor(private readonly holidayService: HolidayService) {}

  @Post()
  async create(@Body() createHolidayDto: CreateHolidayDto): Promise<Holiday> {
    return this.holidayService.create(createHolidayDto);
  }

  @Get()
  async findAll(): Promise<Holiday[]> {
    return this.holidayService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Holiday> {
    return this.holidayService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.holidayService.delete(id);
  }
}
