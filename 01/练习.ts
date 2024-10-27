type lyricType = {
  time: number;
  text: string;
};

function parseLyric(lyric: string): lyricType[] {
  const lyrics: lyricType[] = [];
  lyrics.push({ time: 0, text: "aaa" });
  return lyrics;
}
parseLyric("aaa");
export {};
