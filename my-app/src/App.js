import './App.css';
import { MyCreateElement } from "./components/MyCreateElement";
import { MyComponent } from "./components/MyComponent";
import { MyPureComponent } from "./components/MyPureComponent"
import { MyFunctionalComponent } from "./components/MyFunctionalComponent"

function App() {
  return (
    <div className="App">
      <h1>Task 1</h1>
      <h1>Hello, World!</h1>
      <MyCreateElement name="MyCreateElement"></MyCreateElement>
      <MyComponent name="MyComponent"></MyComponent>
      <MyPureComponent name="MyPureComponent"></MyPureComponent>
      <MyFunctionalComponent name="MyFunctionalComponent"></MyFunctionalComponent>
    </div>
  );
}

export default App;