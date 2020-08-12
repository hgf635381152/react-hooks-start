import * as React from 'react';
// import { Header, About } from './components';
import { Header } from './components';

// export const App: React.StatelessComponent<{}> = () => {
export const App: React.StatelessComponent<{}> = (props) => {
  console.log(props)
  return (
    <Header />
  );
}