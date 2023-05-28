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
