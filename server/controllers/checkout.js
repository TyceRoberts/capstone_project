let listArr = [];

module.exports = {
  add: async (req, res) => {
    console.log('made it')
    const { string } = req.body;
    let duplicateCheck = true;

    for (let i = 0; i <= listArr.length; i++) {
      if (string === listArr[i]) {
        duplicateCheck = false;
      }
    }

    if (duplicateCheck === true) {
      listArr.push(string);
      res.status(200).send(listArr)
    }

    duplicateCheck = true;
    res.status(300).send(listArr)
  },

  get: async (req, res) => {
    console.log('made it')
    res.status(200).send(listArr);
  },

  remove: async (req, res) => {
    console.log('made it')
    const { stringDiv } = req.body;

    for (let i = 0; i <= listArr.length; i++) {
      if (stringDiv === listArr[i]) {
        listArr.splice(i, 1);
      }
    }

    res.status(200).send(listArr);
  }
}