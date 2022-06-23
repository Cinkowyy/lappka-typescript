export interface detailProps {
  detailName: string;
  value: string;
}

export interface petDataType {
  image: string; //PNG Image Url
  name: string;
  breed: string;
  genderIcon: string; //SVG Image Url
  details: detailProps[];
}
