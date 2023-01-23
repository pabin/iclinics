import { Injectable } from '@nestjs/common';
import axios from 'axios';

import { FindClinicsDto } from './dto/find-clinics.dto';
import { dentalClinicsURL, vetClinicsURL } from './apis/clinics.api';
import { DentalClinic, VetClinic } from './types/clinics.type';
import { ClinicsUtils } from './clinics.utils';

@Injectable()
export class ClinicsService {
  constructor(private readonly clinicsUtils: ClinicsUtils) {}

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

  /**
   * Returns array of clinics.
   *
   * @param findClinicsDto search queries.
   * @return array of clinics.
   */
  async findClinics(findClinicsDto: FindClinicsDto) {
    const formattedQueries = this.clinicsUtils.formatQueries(findClinicsDto);
    const { name, state, openingFrom, openingTo } = formattedQueries;

    const [dentalClinicList, vetClinicList] = await Promise.all([
      this.getDentalClinics(),
      this.getVetClinics(),
    ]);

    const dentalClinics: DentalClinic[] = dentalClinicList.filter(
      (clinic: DentalClinic) => {
        const formattedData = this.clinicsUtils.formatDentalClinic(clinic);
        const { clinicName, clinicState, clinicOpening, clinicClosing } =
          formattedData;

        const hasName = name ? clinicName.includes(name) : true;
        const hasState = state ? clinicState.includes(state) : true;
        const hasOpening = openingFrom ? clinicOpening === openingFrom : true;
        const hasClosing = openingTo ? clinicClosing === openingTo : true;

        if (hasName && hasState && hasOpening && hasClosing) {
          return clinic;
        }
      },
    );

    const vetClinics: VetClinic[] = vetClinicList.filter(
      (clinic: VetClinic) => {
        const formattedData = this.clinicsUtils.formatVetClinic(clinic);
        const { clinicName, clinicState, clinicOpening, clinicClosing } =
          formattedData;

        const hasName = name ? clinicName.includes(name) : true;
        const hasState = state ? clinicState.includes(state) : true;
        const hasOpening = openingFrom ? clinicOpening === openingFrom : true;
        const hasClosing = openingTo ? clinicClosing === openingTo : true;

        if (hasName && hasState && hasOpening && hasClosing) {
          return clinic;
        }
      },
    );

    const clinics: (DentalClinic | VetClinic)[] = [
      ...dentalClinics,
      ...vetClinics,
    ];
    return clinics;
  }
}
