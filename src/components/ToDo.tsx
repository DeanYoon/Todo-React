import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const frontData = oldToDos.slice(0, targetIndex);
      const backData = oldToDos.slice(targetIndex + 1);
      const newToDo = { text, id, category: name as any };
      const finalToDo = [...frontData, newToDo, ...backData];
      return finalToDo;
    });
  };
  const onDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const frontData = oldToDos.slice(0, targetIndex);
      const backData = oldToDos.slice(targetIndex + 1);
      const finalToDo = [...frontData, ...backData];

      return finalToDo;
    });
  };

  return (
    <li>
      <span>{text}</span>

      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          DONE
        </button>
      )}
      <button onClick={onDelete}>DELETE</button>
    </li>
  );
}

export default ToDo;
