let listArr = [];

module.exports = {
  add: async (req, res) => {
    console.log('made it')
    console.log(req.body);
    const { string } = req.body;
    // console.log(string);
    let duplicateCheck = true;

    for (let i = 0; i <= listArr.length; i++) {
      if (string === listArr[i]) {
        duplicateCheck = false;
      }
    }

    if (duplicateCheck === true) {
      listArr.push(string);
      res.status(200).send(listArr)
    } else {
      res.status(300).send(listArr)
    }

    duplicateCheck = true;
  },

  get: async (req, res) => {
    console.log('made it')
    res.status(200).send(listArr);
  },

  remove: async (req, res) => {
    console.log('made it')
    const { string } = req.body;

    for (let i = 0; i <= listArr.length; i++) {
      console.log('made it here');
      if (string === listArr[i]) {
        console.log('now here');
        listArr.splice((i - 1), 1);
        console.log(listArr);
      }
    }

    res.status(200).send(listArr);
  }
}