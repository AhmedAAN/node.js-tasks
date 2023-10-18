const { Router } = require('express');
const router = Router();

const { requireAuth } = require('../middleware/authMiddleware');
const noteController = require('../controllers/noteController');
const cookieParser = require('cookie-parser');
router.use(cookieParser());


router.get('/notes/create', requireAuth, noteController.createNote_get);
router.post('/notes', noteController.createNote_post);
router.get('/notes', requireAuth, noteController.notes_get);
router.get('/notes/:id', requireAuth, noteController.oneNote_get);
router.delete('/notes/:id', noteController.oneNote_delete);
router.post('/notes/:id', noteController.oneNote_update);
router.get('/notes/update/:id', requireAuth, noteController.updateNote_get);

module.exports = router;