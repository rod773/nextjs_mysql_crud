export default function handler(req, res) {
  const sql = "select * from  product where id=".concat(req.query.id);
  console.log(sql);
  return res.status(200).json({
    sql,
  });
}
