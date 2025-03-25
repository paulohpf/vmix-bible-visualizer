export enum EBibleVersion {
  AA,
  ACF,
  NVI,
}

export interface ResBibleVersions {
  name: string;
  abbrev: string;
}

export interface BibleBook {
  name: string;
  abbrev: string;
}

export interface BibleChapter {
  number: number;
  text: string;
}
