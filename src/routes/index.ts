import { Router } from "express";
import * as PageController from '../controllers/pageController'
import * as searchController from '../controllers/searchController'

const router = Router();

router.get('/', PageController.home);
router.get('/fullParty', PageController.fullParty);
router.get('/stationary', PageController.stationary);
router.get('/lux', PageController.lux);
router.get('/kitkat', PageController.kitkat);
router.get('/specials', PageController.specials);

router.get('/search', searchController.search)


export default router;