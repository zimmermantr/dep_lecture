import lists from "../data/lists.json"
import {List} from "../components/List"
export const Lists = () => {
  return (
    <div>
      <h1>Lists</h1>
      {lists.map((list)=>(
        <List key={`list${list.id}`} list={list}/>
      ))}
    </div>
  );
};
