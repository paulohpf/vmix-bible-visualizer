import React from 'react';
import Header from './components/Header';

function MyButton({ title }: { title: string }) {
  return <button>{title}</button>;
}

export default function MyApp() {
  return (
    <div>
      <Header />
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a button" />
    </div>
  );
}
