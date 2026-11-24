import { PartialType } from '@nestjs/mapped-types';
import { CreateConverterDto } from './create-converter.dto.js';

export class UpdateConverterDto extends PartialType(CreateConverterDto) {}
