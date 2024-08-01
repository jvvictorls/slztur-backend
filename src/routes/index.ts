import { Router } from "express";
import spotsRoutes from "./spots.routes";
import usersRoutes from "./users.routes";

const router = Router();

router.use('/spots', spotsRoutes);

router.use('/users', usersRoutes);

export default router;