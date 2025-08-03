import { Component } from "react";
import "./App.css";

export const Header = () => {
  return <h2>Hello world</h2>;
};

// export const Field = () => {
//   const holder = "Enter here";
//   const styledField = {
//     width: "300px",
//   };
//   return <input placeholder={holder} type="text" style={styledField} />;
// };

export class FieldClass extends Component {
  render() {
    const holder = "Enter here";
    const styledField = {
      width: "300px",
    };

    return <input placeholder={holder} type="text" style={styledField} />;
  }
}

export function Btn() {
  const text = "Log in";

  // const res = () => {
  //   return "Log in";
  // };

  // const p = <p>Log in</p>;

  const logged = true;

  return <button>{logged ? "Enter" : text}</button>;
}

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Fields /> */}
      <FieldClass />
      <Btn />
    </div>
  );
}

export default App;
