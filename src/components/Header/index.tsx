import React, { useState } from 'react';
import { Select } from "antd";
import { Wrapper } from './styles';
import { EBibleVersion } from '../../interfaces';

const Header = () => {
  const [versions] = useState(window.myAPI ? window.myAPI.getBibleVersions() : []);
  const [selectedVersion, setSelectedVersion] = useState("");
  const [selectedBook, setSelectedBook] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");
  const [books, setBooks] = useState([]);
  const [bookChapters, setBookChapters] = useState([]);
  console.log({ books, bookChapters });

  const getBooks = (version) => {
    if (window.myAPI) {
      setSelectedVersion(version)
      const getBooks = window.myAPI.getBooks(version);
      setBooks(getBooks);
    }
  }

  const getBookChapters = (book) => {
    if (window.myAPI) {
      console.log({ selectedVersion, book })
      const bookChapters = window.myAPI.getChapters(selectedVersion as unknown as EBibleVersion, book);
      setSelectedBook(book);
      setBookChapters(bookChapters);
    }
  }

  const getVerses = (chapter) => {
    if (window.myAPI) {
      const verses = window.myAPI.getChapter(selectedVersion as unknown as EBibleVersion, selectedBook, selectedChapter)
      console.log(verses);
    }
  }

  return (
    <Wrapper>
      <Select
        style={{ width: 120 }}
        placeholder="Versão"
        options={versions.map((version) => ({ value: version.abbrev, label: version.name }))}
        onChange={getBooks}
      />
      <Select
        style={{ width: 120 }}
        placeholder="Livro"
        options={books.map(book => ({ value: book.abbrev, label: book.name }))}
        onChange={getBookChapters}
      />
      <Select
        style={{ width: 120 }}
        placeholder="Capitulo"
        options={bookChapters.map(chapter => ({ value: chapter, label: chapter }))}
        onChange={(chapter) => {
          setSelectedChapter(chapter)
          getVerses(chapter);
        }}
      />
      <Select
        style={{ width: 120 }}
        placeholder="Versiculos"
        options={[
          { value: 'NVI-BR', label: "Almeida Revisada Imprensa Bíblica" },
          { value: 'ACF-BR', label: "Almeida Corrigida e Revisada Fiel" },
          { value: 'AA-BR', label: "Almeida Revisada Imprensa Bíblica" },
        ]}
      />
    </Wrapper>
  )
}

export default Header;
