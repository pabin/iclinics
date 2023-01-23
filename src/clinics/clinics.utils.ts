import { FindClinicsDto } from './dto/find-clinics.dto';
import { DentalClinic, VetClinic } from './types/clinics.type';

export class ClinicsUtils {
  formatQueries(findClinicsDto: FindClinicsDto) {
    const name = findClinicsDto.name?.trim().toLowerCase();
    const state = findClinicsDto.state?.trim().toLowerCase();
    const openingFrom = findClinicsDto.openingFrom?.trim().toLowerCase();
    const openingTo = findClinicsDto.openingTo?.trim().toLowerCase();

    return { name, state, openingFrom, openingTo };
  }

  formatDentalClinic(clinic: DentalClinic) {
    const clinicName = clinic.name.toLowerCase();
    const clinicState = clinic.stateName.toLowerCase();
    const clinicOpening = clinic.availability.from.toLowerCase();
    const clinicClosing = clinic.availability.to.toLowerCase();

    return { clinicName, clinicState, clinicOpening, clinicClosing };
  }

  formatVetClinic(clinic: VetClinic) {
    const clinicName = clinic.clinicName.toLowerCase();
    const clinicState = clinic.stateCode.toLowerCase();
    const clinicOpening = clinic.opening.from.toLowerCase();
    const clinicClosing = clinic.opening.to.toLowerCase();

    return { clinicName, clinicState, clinicOpening, clinicClosing };
  }
}
