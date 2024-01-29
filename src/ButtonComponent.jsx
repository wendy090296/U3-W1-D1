import "./App.css";

const ButtonComponent = function (propsObj) {
  return (
    <div>
      <button> {propsObj.text}</button>
    </div>
  );
};
export default ButtonComponent;
