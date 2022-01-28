const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // hyo jung@naver.com -> 스페이스를 없애주는 역할
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastmane: {
        type: String,
        maxlength: 50
    },
    role: { //관리자, 일반유저를 나누기 위함
        type: Number,
        default: 0 // 지정하지 않으면 0으로세팅
    },
    image: String,
    token: { //유효성체크 역할
        type: String
    },
    tokenExp: { //토큰의 유효기간
        type: Number
    }
})

// schema를 model로 감싸주는 역할
const User = mongoose.model('User', userSchema) // 모델의 이름, 스키마

// 해당 모듈을 다른 파일에서도 쓸 수 있게
module.exports = { User }