import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validateOrReject } from "class-validator";
import { AccessType, Category } from "../models/category.model";

export interface ICreateCategoryDto extends Omit<Category, 'id'| 'category'>{
  // categoryId: Category['id'];
}

export class CreateCategoryDto implements ICreateCategoryDto{

  @Length(5, 10)
  @IsNotEmpty()
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}


// export interface UpdateProductDto extends Partial<ICreateCategoryDto>{
// }

(async ()=> {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'a1234';
    dto.image = 'https://api.escuelajs.co/api/v1/products'
    await validateOrReject(dto);

  } catch (error) {
    console.log(error)
  }
})();
