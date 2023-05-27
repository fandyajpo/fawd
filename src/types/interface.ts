export interface IState {
  id?: string;
  username?: string;
}

export interface IScreen {
  image?: string;
  color?: string;
  children: React.ReactNode;
}
