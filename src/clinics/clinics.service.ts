import { Injectable } from '@nestjs/common';

import { FindClinicsDto } from './dto/find-clinics.dto';

@Injectable()
export class ClinicsService {
  async findClinics(findClinicsDto: FindClinicsDto) {
    return 'return clinics array';
  }
}
