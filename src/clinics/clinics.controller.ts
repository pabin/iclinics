import { Controller, Get, Query } from '@nestjs/common';

import { ClinicsService } from './clinics.service';
import { FindClinicsDto } from './dto/find-clinics.dto';

@Controller('clinics')
export class ClinicsController {
  constructor(private readonly clinicsService: ClinicsService) {}

  @Get()
  findClinics(@Query() findClinicsDto: FindClinicsDto) {
    return this.clinicsService.findClinics(findClinicsDto);
  }
}
