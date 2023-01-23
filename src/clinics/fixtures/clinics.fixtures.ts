import { DentalClinic, VetClinic } from '../types/clinics.type';

export const dentalClinics: DentalClinic[] = [
  {
    name: 'A1 Dental Clinic',
    stateName: 'NV',
    availability: { from: '10:00', to: '22:00' },
  },
  {
    name: 'Awesome Dental Clinic',
    stateName: 'FL',
    availability: { from: '10:00', to: '14:00' },
  },
  {
    name: 'Mira Clinic',
    stateName: 'NY',
    availability: { from: '12:00', to: '16:00' },
  },
];

export const vetClinics: VetClinic[] = [
  {
    clinicName: 'New Vet Clinic',
    stateCode: 'NV',
    opening: { from: '12:00', to: '22:00' },
  },
  {
    clinicName: 'Plus Vet Clinic',
    stateCode: 'FL',
    opening: { from: '10:00', to: '18:00' },
  },
  {
    clinicName: 'My Clinic',
    stateCode: 'NY',
    opening: { from: '11:00', to: '17:00' },
  },
];
