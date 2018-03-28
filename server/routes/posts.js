const express           = require('express');
const router            = express.Router();
const postController    = require('../controllers/PostController');
const {sendUploadToGCS} = require('../middlewares/uploadGCS') 
const multer            = require('multer')

const upload = multer({
   storage  : multer.memoryStorage(),
   limits   : {
     fileSize: 10*1024*1024
  } 
 })

router.get('/',postController.readFile)
router.get('/:user_id',postController.findByIdUserPost)
router.get('/detailpost/:id_post', postController.findByIdPost)
router.put('/:id', postController.update)
router.post('/upload',upload.single('image'),sendUploadToGCS,postController.uploadFile)
router.delete('/:id_post',postController.deletePost)
router.post('/upvote', postController.upvote)
router.post('/downvote', postController.downvote)

module.exports = router;