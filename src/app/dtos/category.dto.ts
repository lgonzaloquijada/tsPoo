import { AccessType, Category } from '../models/category.model';
import {
  IsEnum,
  isNotEmpty,
  IsNotEmpty,
  IsUrl,
  Length,
  validateOrReject,
} from 'class-validator';

export interface ICreateCategoryDto
  extends Omit<Category, 'id' | 'creationAt' | 'updatedAt'> {}

export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 100)
  name!: string;

  slug!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsNotEmpty()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'asd';
    dto.slug = 'category';
    dto.image = 'https://example.com/image.jpg';
    dto.access = AccessType.PUBLIC;

    await validateOrReject(dto);
    console.log(dto);
  } catch (errors) {
    console.log(errors);
  }
})();
