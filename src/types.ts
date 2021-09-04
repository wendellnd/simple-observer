export type Observer = (observer: unknown) => void;

export interface Subject {
  observers: Observer[];

  subscribe(client: Observer): void;
  unsubscribe(client: Observer): void;
  notifyAll(message: unknown): void;
}
