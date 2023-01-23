import { ClinicsController } from '../clinics.controller';
import { ClinicsService } from '../clinics.service';
import { ClinicsUtils } from '../clinics.utils';
import { FindClinicsDto } from '../dto/find-clinics.dto';
import { dentalClinics } from '../fixtures/clinics.fixtures';

describe('ClinicsController', () => {
  let clinicsController: ClinicsController;
  let clinicsService: ClinicsService;
  let clinicsUtils: ClinicsUtils;

  beforeEach(async () => {
    clinicsService = new ClinicsService(clinicsUtils);
    clinicsController = new ClinicsController(clinicsService);
  });

  it('should be defined', () => {
    expect(clinicsController).toBeDefined();
  });

  describe('findClinics', () => {
    it('should return an array of clinics', async () => {
      const query: FindClinicsDto = {
        name: 'A1 Vet',
      };

      jest
        .spyOn(clinicsService, 'findClinics')
        .mockImplementation(() => Promise.resolve(dentalClinics));

      expect(await clinicsController.findClinics(query)).toEqual(dentalClinics);
    });
  });
});
