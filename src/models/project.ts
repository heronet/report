export interface ProjectType {
  id: number;
  title: string;
  imgUrl: string;
  techs: { id: number; title: string }[];
  description: string;
}
