module.exports = {
  calculoInteres: async (req, res) => {
    const { n, i, c } = req.body;
    if (n && i && c) {
      let I = c * i * n;
      res.status(200).json(I);
    } else {
      res.status(400).json("Faltan datos importantes");
    }
  },
  calculoTasaInteres: async (req,res)=>{
    const { n, I, c } = req.body;
    if (n && I && c) {
      let i = I/(c * n);
      res.status(200).json(i);
    } else {
      res.status(400).json("Faltan datos importantes");
    }
  },
  calculoTiempo: async (req,res)=>{
    const { i, I, c } = req.body;
    if (i && I && c) {
      let n = I/(c * i);
      res.status(200).json(n);
    } else {
      res.status(400).json("Faltan datos importantes");
    }
  },
  calculoCapital: async (req,res)=>{
    const { i, I, n } = req.body;
    if (i && I && n) {
      let c = I/(c * i);
      res.status(200).json(c);
    } else {
      res.status(400).json("Faltan datos importantes");
    }
  },
  getHome: async (req,res)=>{
  res.send("HOME")
  }
};
