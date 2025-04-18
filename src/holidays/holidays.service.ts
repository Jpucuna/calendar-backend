// src/holidays/holiday.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Holiday } from './holidays.entity';
import { Repository } from 'typeorm';
import { CreateHolidayDto } from './dto/create-holiday.dto';

@Injectable()
export class HolidayService {
  constructor(
    @InjectRepository(Holiday)
    private readonly holidayRepository: Repository<Holiday>,
  ) {}

  async create(createHolidayDto: CreateHolidayDto): Promise<Holiday> {
    const holiday = this.holidayRepository.create({
      title: createHolidayDto.title,
      description: createHolidayDto.description,
      start_date: createHolidayDto.start_date,
      end_date: createHolidayDto.end_date,
      type: createHolidayDto.type,
      is_recoverable: createHolidayDto.is_recoverable,
    });
    return this.holidayRepository.save(holiday);
  }

  async update(
    id: string,
    createHolidayDto: CreateHolidayDto,
  ): Promise<Holiday> {
    const holiday = await this.holidayRepository.findOneBy({ id });
    if (!holiday) {
      throw new Error(`Holiday with ID ${id} not found`);
    }
    holiday.title = createHolidayDto.title;
    holiday.description = createHolidayDto.description;
    holiday.start_date = createHolidayDto.start_date;
    holiday.end_date = createHolidayDto.end_date;
    holiday.type = createHolidayDto.type;
    holiday.is_recoverable = createHolidayDto.is_recoverable;
    return this.holidayRepository.save(holiday);
  }

  async findAll(): Promise<Holiday[]> {
    return this.holidayRepository.find();
  }

  async findOne(id: string): Promise<Holiday> {
    const holiday = await this.holidayRepository.findOneBy({ id });
    if (!holiday) {
      throw new Error(`Holiday with ID ${id} not found`);
    }
    return holiday;
  }

  async delete(id: string): Promise<void> {
    await this.holidayRepository.delete(id);
  }
}
