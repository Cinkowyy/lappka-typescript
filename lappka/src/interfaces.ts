export interface detailProps {
  detailName: string;
  value: string;
}

export interface cardProps {
  image: string; //PNG Image Url
  name: string;
  breed: string;
  genderIcon: string; //SVG Image Url
  details: detailProps[];
}
