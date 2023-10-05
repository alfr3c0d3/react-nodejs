import { Router } from 'express';
import monsters from './monsters.js';
import habitats from './habitats.js';
import lives from './lives.js';

const router = Router();

router.use('/api/monsters', monsters);
router.use('/api/habitats', habitats);
router.use('/api/lives', lives);

export default router;
