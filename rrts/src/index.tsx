import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}

const App = (props: AppProps): JSX.Element => {
  return <div> {props.color} </div>;
};

// interface AppState {
//   counter: number;
// }

// class App extends React.Component<AppProps, AppState> {
//   constructor(props: AppProps) {
//     super(props);

//     this.state = { counter: 0 };
//   }

//   onInc = (): void => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   onDec = (): void => {
//     this.setState({ counter: this.state.counter - 1 });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.onInc}> Inc </button>
//         <button onClick={this.onDec}> Dec </button>
//         {this.state.counter}
//       </div>
//     );
//   }
// }

ReactDOM.render(<App color="red" />, document.querySelector('#root'));
