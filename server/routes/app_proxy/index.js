import { Router } from "express";
import clientProvider from "../../../utils/clientProvider.js";
const proxyRouter = Router();
import createVariant from "../../controllers/storefront.js";

proxyRouter.get("/json", async (req, res) => {
  const { client } = await clientProvider.offline.graphqlClient({
    shop: res.locals.user_shop,
  });
  return res.status(200).send({ content: "Proxy Be Working" });
});

proxyRouter.post("/create-variant", createVariant)
export default proxyRouter;
