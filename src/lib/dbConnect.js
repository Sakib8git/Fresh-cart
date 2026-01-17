const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const connect = async (collection) => {
  const database = process.env.DB_NAME;
  return client.db(database).collection(collection);
};
