import KeyvRedis from "@keyv/redis";
import Keyv from "keyv";

import { env } from "./env";

const keyvRedis = new KeyvRedis(env.KV_URL);

export const cache = new Keyv({
  store: keyvRedis,
  namespace: "defraud-client",
});
