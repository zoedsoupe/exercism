class Words {
  private splitWords(input: string): RegExpMatchArray {
    const re = /[^\s]+/g;
    return input.toLowerCase().match(re) ?? [];
  }

  public count(input: string): Map<string, number> {
    const wordCounts: Map<string, number> = new Map();

    for (const word of this.splitWords(input)) {
      wordCounts.set(word, (wordCounts.get(word) ?? 0) + 1);
    }

    return wordCounts;
  }
}

export default Words;
