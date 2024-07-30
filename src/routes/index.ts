import { Router } from "express";
import spotsRoutes from "./spots.routes";

const router = Router();

router.use('/spots', spotsRoutes);

export default router;