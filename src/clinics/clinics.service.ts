import { Injectable } from '@nestjs/common';
import axios from 'axios';

import { FindClinicsDto } from './dto/find-clinics.dto';
import { dentalClinicsURL, vetClinicsURL } from './apis/clinics.api';

@Injectable()
export class ClinicsService {
  async getDentalClinics() {
    try {
      const dentalClinics = await axios.get(dentalClinicsURL);
      return dentalClinics.data;
    } catch (err) {
      // returning empty array because another api might be working
      return [];
    }
  }

  async getVetClinics() {
    try {
      const vetClinics = await axios.get(vetClinicsURL);
      return vetClinics.data;
    } catch (err) {
      return [];
    }
  }

  async findClinics(findClinicsDto: FindClinicsDto) {
    return 'return clinics array';
  }
}
