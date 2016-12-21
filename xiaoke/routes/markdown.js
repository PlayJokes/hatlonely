var fs = require('fs');
var marked = require('marked');
var express = require('express');
var router = express.Router();

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: true,
    sanitize: true,
    smartLists: true,
    smartypants: true
});

marked.setOptions({
    highlight: function(code) {
        return require('highlight.js').highlightAuto(code).value;
    }
});

router.get('/', function(req, res, next) {
    doc = req.query.doc;
    fs.readFile('../documents/' + doc, 'utf-8', (err, data) => {
        if (err) {
            res.render('error', {
                'error': err
            });
        } else {
            res.render('layout', {
                'title': doc,
                'markdown': marked(data)
            });
        }
    });
});

module.exports = router;