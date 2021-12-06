const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));
router.use(express.json());


// 목록조회
// localhost:5001/board?type=list
router.post('/',(req, res, next) => {
    console.log('TYPE: ', req.query.type);
    // get -> req.query
    // post -> req.body
    const type = req.query.type;
    if( 'list' === type ) {
        const dbconnect_Module = require('./dbconnect_module');

        //mybaits
        req.body.mapper ='BoardMapper'
        req.body.crud = 'select'
        req.body.mapper_id = 'selectBoardList'

        router.use('/', dbconnect_Module);
        next('route');
    } else if( 'insert' === type ) {
        const dbconnect_Module = require('./dbconnect_module');

        //mybaits
        req.body.mapper ='BoardMapper';
        req.body.crud = 'insert';
        req.body.mapper_id = 'insertBoard';

        router.use('/', dbconnect_Module);
        next('route');
    } else if( 'update' === type ) {
        const dbconnect_Module = require('./dbconnect_module');

        //mybaits
        req.body.mapper ='BoardMapper';
        req.body.crud = 'update';
        req.body.mapper_id = 'updateBoard';

        router.use('/', dbconnect_Module);
        next('route');
    } else if( 'delete' === type ) {
        const dbconnect_Module = require('./dbconnect_module');

        //mybaits
        req.body.mapper ='BoardMapper';
        req.body.crud = 'delete';
        req.body.mapper_id = 'deleteBoard';

        router.use('/', dbconnect_Module);
        next('route');
    }

});

module.exports = router;
// 저장
// board?type=insert
// 수정
// board?type=update
// 삭제
// board?typq=delete