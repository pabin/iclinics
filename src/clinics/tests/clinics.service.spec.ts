import { Test, TestingModule } from '@nestjs/testing';
import axios from 'axios';

import { ClinicsController } from '../clinics.controller';
import { ClinicsService } from '../clinics.service';
import { ClinicsUtils } from '../clinics.utils';
import { dentalClinics, vetClinics } from '../fixtures/clinics.fixtures';

jest.mock('axios');

describe('ClinicsService', () => {
  let service: ClinicsService;
  let controller: ClinicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClinicsController],
      providers: [ClinicsService, ClinicsUtils],
    }).compile();

    service = module.get<ClinicsService>(ClinicsService);
    controller = module.get<ClinicsController>(ClinicsController);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('when  getDentalClinics call is success', () => {
    it('should return an array of dental clinics', async () => {
      (axios.get as jest.Mock).mockResolvedValueOnce({ data: dentalClinics });

      const response = await service.getDentalClinics();
      expect(response).toEqual(dentalClinics);
    });
  });

  describe('when getDentalClinics call fails', () => {
    it('should return empty array', async () => {
      (axios.get as jest.Mock).mockRejectedValueOnce(new Error('Server Error'));

      const response = await service.getDentalClinics();
      expect(response).toEqual([]);
    });
  });

  describe('when getVetClinics call is success', () => {
    it('should return an array of vet clinics', async () => {
      (axios.get as jest.Mock).mockResolvedValueOnce({ data: vetClinics });

      const response = await service.getVetClinics();
      expect(response).toEqual(vetClinics);
    });
  });

  describe('when getVetClinics call fails', () => {
    it('should return empty array', async () => {
      (axios.get as jest.Mock).mockRejectedValueOnce(new Error('Server Error'));

      const response = await service.getVetClinics();
      expect(response).toEqual([]);
    });
  });

  describe('calling findClinics with name query', () => {
    it('should return matched array of clinics', async () => {
      const searchResult = [
        {
          name: 'A1 Dental Clinic',
          stateName: 'NV',
          availability: { from: '10:00', to: '22:00' },
        },
      ];
      const queryDto = { name: 'A1' };

      jest
        .spyOn(service, 'getDentalClinics')
        .mockImplementation(() => Promise.resolve(dentalClinics));

      jest
        .spyOn(service, 'getVetClinics')
        .mockImplementation(() => Promise.resolve(vetClinics));

      const response = await controller.findClinics(queryDto);
      expect(response).toEqual(searchResult);
    });
  });

  describe('calling findClinics with name and state query', () => {
    it('should return matched array of clinics', async () => {
      const searchResult = [
        {
          name: 'Mira Clinic',
          stateName: 'NY',
          availability: { from: '12:00', to: '16:00' },
        },
        {
          clinicName: 'My Clinic',
          stateCode: 'NY',
          opening: { from: '11:00', to: '17:00' },
        },
      ];
      const queryDto = { name: 'clinic', state: 'NY' };

      jest
        .spyOn(service, 'getDentalClinics')
        .mockImplementation(() => Promise.resolve(dentalClinics));

      jest
        .spyOn(service, 'getVetClinics')
        .mockImplementation(() => Promise.resolve(vetClinics));

      const response = await controller.findClinics(queryDto);
      expect(response).toEqual(searchResult);
    });
  });

  describe('calling findClinics with name, state and openingFrom query', () => {
    it('should return matched array of clinics', async () => {
      const searchResult = [
        {
          clinicName: 'My Clinic',
          stateCode: 'NY',
          opening: { from: '11:00', to: '17:00' },
        },
      ];
      const queryDto = { name: 'clinic', state: 'NY', openingFrom: '11:00' };

      jest
        .spyOn(service, 'getDentalClinics')
        .mockImplementation(() => Promise.resolve(dentalClinics));

      jest
        .spyOn(service, 'getVetClinics')
        .mockImplementation(() => Promise.resolve(vetClinics));

      const response = await controller.findClinics(queryDto);
      expect(response).toEqual(searchResult);
    });
  });

  describe('calling findClinics with all query', () => {
    it('should return matched array of clinics', async () => {
      const searchResult = [
        {
          clinicName: 'Plus Vet Clinic',
          stateCode: 'FL',
          opening: { from: '10:00', to: '18:00' },
        },
      ];
      const queryDto = {
        name: 'clinic',
        state: 'FL',
        openingFrom: '10:00',
        openingTo: '18:00',
      };

      jest
        .spyOn(service, 'getDentalClinics')
        .mockImplementation(() => Promise.resolve(dentalClinics));

      jest
        .spyOn(service, 'getVetClinics')
        .mockImplementation(() => Promise.resolve(vetClinics));

      const response = await controller.findClinics(queryDto);
      expect(response).toEqual(searchResult);
    });
  });

  describe('calling findClinics with query other than name', () => {
    it('should return matched array of clinics', async () => {
      const searchResult = [
        {
          clinicName: 'Plus Vet Clinic',
          stateCode: 'FL',
          opening: { from: '10:00', to: '18:00' },
        },
      ];
      const queryDto = {
        state: 'FL',
        openingFrom: '10:00',
        openingTo: '18:00',
      };

      jest
        .spyOn(service, 'getDentalClinics')
        .mockImplementation(() => Promise.resolve(dentalClinics));

      jest
        .spyOn(service, 'getVetClinics')
        .mockImplementation(() => Promise.resolve(vetClinics));

      const response = await controller.findClinics(queryDto);
      expect(response).toEqual(searchResult);
    });
  });
});
