const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, username, password } = req.body;
    try {
      const exUser = await User.findOne({ where: { email } });
      if (exUser) {
        return res.status(400).send('/exist');
      }
      const hash = await bcrypt.hash(password, 10);
      await User.create({
        email,
        username,
        password: hash,
      });
      return res.status(200).send("signup complete");
    
    } catch (error) {
      console.error(error);
      return res.status(400).send('/error');
    }
});

module.exports = router;