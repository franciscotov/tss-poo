export enum AccessType {
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC'
}

export interface Category {
  id:    number;
  name:  string;
  image: string;
  access?: AccessType;
}
