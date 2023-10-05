import { Router } from 'express';
import executeQuery from '../services/dbService.js';

const router = Router();

router.get('/', async (request, response, next) => {
  try {
    const res = await executeQuery('SELECT * FROM lives')
    response.json(res);
  } catch (err) {
    return next(err);
  }
});

router.get('/conditions', async (request, response, next) => {
  try {
    const res = await executeQuery('SELECT * FROM lives JOIN habitats h ON name = habitat')
    response.json(res);
  } catch (err) {
    return next(err);
  }
});

router.post('/', async (request, response, next) => {
  const { name, personality } = request.body;

  try {
    await executeQuery(`INSERT INTO lives (name, personality) VALUES ('${name}', '${personality}')`)
    response.redirect('/lives');
  } catch (err) {
    return next(err);
  }
});

router.put('/:id', async (request, response, next) => {
  const { id } = request.params;
  const fields = [];

  ['name', 'personality'].forEach((key) => {
    if (request.body[key]) {
      fields.push(key);
    }
  });

  try {
    await fields.forEach( async field => {
      await executeQuery(`UPDATE lives SET ${field}= ${request.body[field]} WHERE id=${id}`);
    });

    response.redirect('/lives');
  } catch (err) {
    return next(err);
  }
});

router.delete('/:id', async (request, response, next) => {
  const { id } = request.params;

  try {
    await executeQuery(`DELETE FROM lives WHERE id=${id}`);
    response.redirect('/lives');
  } catch (err) {
    return next(err);
  }
});

export default router;
