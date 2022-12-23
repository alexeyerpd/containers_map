export class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, "Ошибка 1"],
      [2, "Ошибка 2"],
    ]);
  }

  translate(code) {
    return this.errors.get(code) || "Unknown error";
  }
}
