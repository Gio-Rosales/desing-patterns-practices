abstract class IObserver<T> {
  abstract refresh(value: T): void;
}

abstract class ISubject<T> {
  abstract observers: IObserver<T>[];
  abstract notify(value: T): void;
  abstract subscribe(observer: IObserver<T>): void;
  abstract unsubscribe(observer: IObserver<T>): void;
}

export class Observer<T> implements IObserver<T> {
  private drawCallback: (value: T) => void;
  constructor(drawCallback: (value: T) => void) {
    this.drawCallback = drawCallback;
  }

  refresh(value: T) {
    this.drawCallback(value);
  }
}

class Subject<T> implements ISubject<T> {
  observers: IObserver<T>[];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: IObserver<T>) {
    this.observers.push(observer);
  }

  unsubscribe(observer: IObserver<T>) {
    this.observers = this.observers.filter(
      currentObserver => currentObserver !== observer
    );
  }

  notify(value: T) {
    this.observers.forEach(observer => observer.refresh(value));
  }
}

export class CounterSubject extends Subject<number> {
  private _value: number;
  constructor(initialValue: number){
    super();
    this._value = initialValue;
  }

  increaseBy(amount: number) {
    this._value += amount;
    this.notify(this._value);
  }

  getValue(): number {
    return this._value;
  }
}