import React from 'react';
import Header from './components/Header';
import { BibleBook, BibleChapter, EBibleVersion, ResBibleVersions } from './interfaces';

declare global {
  interface Window {
    myAPI?: {
      saveBibleJson: (data: string) => ResBibleVersions | ResBibleVersions[];
      getBibleVersions: (version?: EBibleVersion) => any;
      filterBook: (version: EBibleVersion, bookAbbrev: string) => any;
      getBooks: (version: EBibleVersion) => BibleBook[];
      getChapters: (version: EBibleVersion, bookAbbrev: string) => number[];
      getChapter: (version: EBibleVersion, bookAbbrev: string, chapter) => BibleChapter[];
    };
  }
}

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
