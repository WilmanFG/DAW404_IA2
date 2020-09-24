const { Router } = require('express');
const router = Router();

//routes
router.get('/test', (req, res) =>{
    const data = {
        "name": "Gerardo Guzmán",
        "Website": "facebook/WilmanGuzman"
    }
    res.json(data);
});

module.exports = router;
