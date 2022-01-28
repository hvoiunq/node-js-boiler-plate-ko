// index.js = 백엔드시작점
const express = require('express') // express 모듀릉르 가져옴
const app = express() // funcion을 가져와 모듈을 만듦
const port = 3000 // 포트번호는 자유롭게 설정가능


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hanh1016:gksgywjddld10!@cluster0.hxerj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
        /*, {
                userNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
            }*/
    ).then(() => console.log('MongoDB Connected..:)')) //연결확인용 로그
    .catch(err => console.log(err))


app.get('/', (req, res) => {
    res.send(' 출력합니다 Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})