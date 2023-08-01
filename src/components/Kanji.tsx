import * as elements from 'typed-html'

export default function Kanji({ character, meaning, onyomi, kunyomi }: { character: string, meaning: string, onyomi: string, kunyomi: string }) {
  return (
    <div class="flex h-[128px] fade-in" id="kanjiToStudy">
      <div id="kanjiToStudy" class="text-9xl">{character}</div>
      <div class="flex flex-col items-center justify-center">
        <h2>{meaning}</h2>
        {onyomi && <h3>{onyomi}</h3>}
        {kunyomi && <h3>{kunyomi}</h3>}
      </div>
    </div>
  )
}
