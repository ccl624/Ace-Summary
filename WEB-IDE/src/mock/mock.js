var express = require('express');
var fs = require('fs');
var app = express();
var router = express.Router();
// var path = '/Users/chunlei/Documents/GitHub/Ace-Summary/WEB-IDE/src';
// var treeData = {
//   name: path.split('/')[path.split('/').length - 1],
//   path: path,
//   children: []
// };
// getFolderTree(path, treeData.children);

function getFolderTree(path, children) {
  fd = fs.readdirSync(path, {
    withFileTypes: true
  })

  fd.forEach(function (fdItem) {
    let child = {}
    const stat = fs.statSync(path + '/' + fdItem);

    if (stat.isDirectory()) {
      child = {
        name: fdItem,
        path: path + '/' + fdItem,
        isFile: false,
        children: []
      };
      children.push(child);
      getFolderTree(path + '/' + fdItem, child.children);
    } else {
      child = {
        name: fdItem,
        path: path + '/' + fdItem,
        isFile: true,
        children: []
      };
      children.push(child);
    }
  })
}

router.get('api/test', (req, res) => {
  res.send('11111');
})

router.get('/treeData', (req, res) => {
  var path = req.query.path;
  var treeData = {
    name: path.split('/')[path.split('/').length - 1],
    path: path,
    children: []
  };
  getFolderTree(path, treeData.children);
  res.send(treeData);
})

app.use('/api', router);
app.listen(3000, function (err) {
  console.log('启动成功');

})
