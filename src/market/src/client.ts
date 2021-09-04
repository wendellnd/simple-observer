interface Client {
  name: string;

  update: (promotion: string) => void;
}

const createClient = (name: string): Client => {
  const update = (promotion: string) => {
    console.log(`${name} NOVA PROMOÇÃO!!! ${promotion}`);
  };

  return {
    name,
    update,
  };
};

export default createClient;
