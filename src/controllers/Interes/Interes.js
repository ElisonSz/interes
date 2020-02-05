module.exports = {
  calculoInteres: async (req, res) => {
    const { n, i, c } = req.body;
    if (n && i && c) {
      let I = c * i * n;
      res.status(200).json(I);
    } else {
      res.status(400).json("Faltan datos importantes");
    }
  }
};
