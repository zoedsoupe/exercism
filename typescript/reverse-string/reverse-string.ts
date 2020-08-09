class ReverseString {
  static reverse(srt: string): string {
    return [...srt].reverse().join("");
  }
}

export default ReverseString;
