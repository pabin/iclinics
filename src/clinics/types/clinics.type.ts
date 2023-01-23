export type DentalClinic = {
  name: string;
  stateName: string;
  availability: ClinicAvailability;
};

export type VetClinic = {
  clinicName: string;
  stateCode: string;
  opening: ClinicAvailability;
};

type ClinicAvailability = {
  from: string;
  to: string;
};
