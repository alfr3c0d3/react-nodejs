import { Router } from 'express';
import executeQuery from '../services/dbService.js';

const router = Router();

router.get('/', async (request, response, next) => {
  try {
    const res = await executeQuery('SELECT * FROM habitats ORDER BY id');
    response.json(res);
  } catch (err) {
    return next(err);
  }
});

router.get('/:id', async (request, response, next) => {
  const { id } = request.params;

  try {
    const res = await executeQuery(`SELECT * FROM habitats WHERE id=${id}`);
    response.json(res[0] ?? {});
  } catch (err) {
    return next(err);
  }
});

router.post('/', async (request, response, next) => {
  const { name, climate, temperature } = request.body;
  try {
    await executeQuery(`INSERT INTO habitats (Name, Climate, Temperature) VALUES ('${name}', '${climate}', ${temperature})`);
    response.redirect('/habitats');
  } catch (err) {
    return next(err);
  }
});

router.put('/:id', async (request, response, next) => {
  const { id } = request.params;
  const fields = [];

  ['name', 'climate', 'temperature'].forEach((key) => {
    if (request.body[key]) {
      fields.push(key);
    }
  });

  try {
    await fields.forEach(async (field) => {
      await executeQuery(`UPDATE habitats SET ${field}='${request.body[field]}' WHERE id=${id}`);
    });

    response.redirect('/habitats');
  } catch (err) {
    return next(err);
  }
});

router.delete('/:id', async (request, response, next) => {
  const { id } = request.params;

  try {
    await executeQuery(`DELETE FROM habitats WHERE id=${id}`);
    response.redirect('/habitats');
  } catch (err) {
    return next(err);
  }
});

export default router;
