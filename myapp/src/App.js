import { Component } from "react";
import "./App.css";

export const Header = () => {
  return <h2>Hello world</h2>;
};

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: "+++",
    };
  }

  nextYear = () => {
    // this.setState({ years: this.state.years + 1 });
    this.setState((state) => ({
      years: state.years + 1,
    }));
  };

  render() {
    const { name, surname, link } = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>
          My name is {name}, surname - {surname}, age - {this.state.years}
        </h1>
        <a href={link}>My profile</a>
      </div>
    );
  }
}

// const WhoAmI = ({ name, surname, link }) => {
//   return (
// <div>
//   <h1>
//     My name is {name.firstName}, surname - {surname}
//   </h1>
//   <a href={link}>My profile</a>
// </div>
//   );
// };

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
      <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <WhoAmI name="Alex" surname="Shepard" link="vk.com" />
    </div>
  );
}

export default App;
