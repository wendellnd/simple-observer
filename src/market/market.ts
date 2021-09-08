import { Subject, Observer } from "../types";

const createMarket = (): Subject => {
  const clients: Observer[] = [];

  const subscribe = (client: Observer): void => {
    clients.push(client);
    console.log("client subscribed");
  };

  const unsubscribe = (client: Observer): void => {
    clients.splice(clients.indexOf(client), 1);
    console.log("client unsubscribed");
  };

  const notifyAll = (message: unknown): void => {
    clients.forEach((client) => client(message));
  };

  return {
    state: {
      observers: clients,
    },
    subscribe,
    unsubscribe,
    notifyAll,
  };
};

export default createMarket;
