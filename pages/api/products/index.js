function handler(req, res) {
  if (req.method == "POST") {
    console.log("creating  a product");
    console.log(req.body);
    return res.status(200).json("creating  a product");
  } else {
    return res.status(200).json("Getting a Product");
  }
}

export default handler;
