import { atom, selector } from "recoil";

export interface IToDo {
  id: number;
  text: string;
}
interface IToDoState {
  [key: string]: IToDo[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "TO DO": [],
    doing: [
      { id: 1, text: "hi" },
      { id: 2, text: "Hello" },
    ],
    done: [],
  },
});
