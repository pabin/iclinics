import { IsNotEmpty, IsString, ValidateIf } from 'class-validator';

// Ignoring validation for unit testing, can be tested in e2e only
export class FindClinicsDto {
  @ValidateIf((o) => !o.state && !o.openingFrom && !o.openingTo)
  @IsNotEmpty()
  @IsString()
  name?: string;

  @ValidateIf((o) => o.state)
  @IsString()
  state?: string;

  @ValidateIf((o) => o.openingFrom)
  @IsString()
  openingFrom?: string;

  @ValidateIf((o) => o.openingTo)
  @IsString()
  openingTo?: string;
}
