import { Delete } from "./Delete";


export const DeleteMovie = (el) => {
  const { data } = el;
  return (
    <div>
      {data.map((el) => {
        return <Delete el={el} key={el.id} onDelete={props.onDelete} />;
      })}
      {props.children}
    </div>
  );
};
