import { StaticImageData } from "next/image";

export interface IState {
  id?: string;
  username?: string;
}

export interface IScreen {
  id: string;
  image?: string;
  color?: string;
  children: React.ReactNode;
}

export interface KonselingUser {
  image: StaticImageData;
  name: string;
  number: string;
  numberDesktop: string;
  instagram: string;
  tiktok: string;
  description: string;
}
