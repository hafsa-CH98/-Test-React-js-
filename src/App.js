import "./App.css";
import Card from "./card";

function App() {
  return (
    <div className="big_conatiner">
      <Card name="hafsa" stutus="student" p="html css js react" />
      <Card name="meriem" stutus="student" p="html css js react1" />
      <Card name="omar" stutus="student" p="html css js react2" />
      <Card name="rachid" stutus="student" p="html css js react3" />
    </div>
  );
}

export default App;
