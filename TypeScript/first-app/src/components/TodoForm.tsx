import React, { useRef } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  // const [title, setTitle] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(e.target.value);
  // };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
      // setTitle("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        // onChange={changeHandler}
        // value={title}
        onKeyPress={keyPressHandler}
        type="text"
        id="title"
        placeholder="Enter todo name"
      />
      <label htmlFor="title" className="active">
        Enter todo name
      </label>
    </div>
  );
};
