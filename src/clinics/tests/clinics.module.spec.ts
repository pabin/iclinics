import { Test } from '@nestjs/testing';
import { ClinicsModule } from '../clinics.module';

describe('ClinicsModule', () => {
  it('should compile the module', async () => {
    const module = await Test.createTestingModule({
      imports: [ClinicsModule],
    }).compile();

    expect(module).toBeDefined();
  });
});
