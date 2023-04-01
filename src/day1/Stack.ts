// A <- B <- C <- D (where D is head)
// LIFO

type Node<T> = {
  value: T;
  prev?: Node<T>;
};

export default class Stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    this.length++;
    const newNode = { value: item } as Node<T>;

    if (!this.head) {
      this.head = newNode;
      return;
    }

    // const head = this.head;
    // this.head = newNode;
    // this.head.prev = head;

    // better way
    newNode.prev = this.head;
    this.head = newNode;
  }

  pop(): T | undefined {
    // if (!this.head) return undefined;

    // this.length--;
    // const head = this.head;
    // this.head = this.head.prev;
    // head.prev = undefined;

    // return head.value;

    // better way
    this.length = Math.max(0, this.length - 1);
    if (this.length === 0) {
      const head = this.head;
      this.head = undefined;
      return head?.value;
    }

    const head = this.head as Node<T>;
    this.head = head?.prev;
    head.prev = undefined; // clean memory, by default in js

    return head?.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
