import { CounterSubject, Observer } from "./designPatterns/Observer";


export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

export function observerCounter(
  textElement: HTMLParagraphElement,
  increaseButton: HTMLButtonElement,
  decreaseButton: HTMLButtonElement
) {
  const subject = new CounterSubject(0);
  const buttonObserver = new Observer<number>((n: number) => {
    increaseButton.innerHTML = `count is ${n}`;
  });
  const button2Observer = new Observer<number>((n: number) => {
    decreaseButton.innerHTML = `count is ${n}`;
  });
  const textObserver = new Observer<number>((count: number) => {
    textElement.innerHTML = `${count}`;
  });

  subject.subscribe(buttonObserver);
  subject.subscribe(textObserver);
  subject.subscribe(button2Observer);

  increaseButton.addEventListener('click', () => {
    subject.increaseBy(1);
  });
  decreaseButton.addEventListener('click', () => {
    subject.increaseBy(-1);
  })

}