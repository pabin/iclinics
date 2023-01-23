import { IsNotEmpty, IsString, ValidateIf } from 'class-validator';

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
