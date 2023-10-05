import { Router } from 'express';
import executeQuery from '../services/dbService.js';

const router = Router();

router.get('/', async (request, response, next) => {
  try {
    const res = await executeQuery('SELECT * FROM monsters ORDER BY id');
    response.json(res);
  } catch (err) {
    return next(err);
  }
});

router.get('/:id', async (request, response, next) => {
  const { id } = request.params;

  try {
    const res = await executeQuery(`SELECT * FROM monsters WHERE id=${id}`)
    response.json(res[0] ?? {});
  } catch (err) {
    return next(err);
  }
});

router.post('/', async (request, response, next) => {
  const { name, personality } = request.body;

  try {
    await executeQuery(`INSERT INTO monsters (name, personality) VALUES ('${name}', '${personality}')`);
    response.redirect('/monsters');
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
    await fields.forEach(async field => {
      await executeQuery(`UPDATE monsters SET ${field}='${request.body[field]}' WHERE id=${id}`)
    });

    response.redirect('/monsters');
  } catch (err) {
    return next(err);
  }
});

router.delete('/:id', async (request, response, next) => {
  const { id } = request.params;

  try {
    await executeQuery(`DELETE FROM monsters WHERE id=${id}`);
    response.redirect('/monsters');
  } catch (err) {
    return next(err);
  }
});

export default router;
