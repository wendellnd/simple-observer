import { createMarket, createClient } from "./market";

const main = () => {
  const market = createMarket();

  const firstClient = createClient("Wendell");
  const secondClient = createClient("Murilo");
  const thirdClient = createClient("Alexandre");
  const fourthClient = createClient("Pedro");

  market.subscribe(firstClient.update);
  market.subscribe(secondClient.update);
  market.subscribe(thirdClient.update);
  market.subscribe(fourthClient.update);

  market.notifyAll("BATATA 1 REAL");

  market.unsubscribe(fourthClient.update);

  market.notifyAll("BATATA 2 REAIS");
};

main();
