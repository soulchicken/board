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

router.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const sendData = { isLogin: "" };

    const exUser = await User.findOne({ where: { email } });
    if (!exUser) {
        sendData.isLogin = "가입되지 않은 회원입니다.";
        return res.status(401).send(sendData);
    }

    bcrypt.compare(password , exUser.password, (err, result) => {    // 입력된 비밀번호가 해시된 저장값과 같은 값인지 비교
        if (result) {
            req.session.isLogin = true;      // 세션 정보 갱신
            req.session.email = email;
            req.session.userId = exUser.id;

            req.session.save(function () {
                sendData.isLogin = "True"
                res.status(200).send(sendData);
            });
        } else {
        sendData.isLogin = "로그인 정보가 일치하지 않습니다."
        res.status(401).send(sendData);
        }
    })
});

router.post('/logout', function (req, res) {
    const sendData = { isLogin: "" };
    try {
        req.session.destroy()
        sendData.isLogin = "False"
        res.send(sendData);
    } catch (error) {
        console.error(error);
        sendData.isLogin = "Unauthorized?"
        res.status(401).send(sendData);
    }
});

module.exports = router;