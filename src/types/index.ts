import { IState } from "./interface";

export type TAction =
  | { type: "SET_ID"; payload: IState }
  | { type: "SET_USERNAME"; payload: IState };

export type TGlobalContext = {
  state: IState;
  dispatch: React.Dispatch<TAction>;
};
