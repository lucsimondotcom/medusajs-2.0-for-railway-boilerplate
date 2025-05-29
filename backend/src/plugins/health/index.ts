import { Router } from "express";

const healthPlugin = {
  load: (container, options) => {
    const router = Router();

    router.get("/health", (req, res) => {
      res.status(200).send("OK");
    });

    return {
      routers: [
        {
          type: "store", // could also be "admin" if you prefer
          routes: router,
        },
      ],
    };
  },
};

export default healthPlugin;
