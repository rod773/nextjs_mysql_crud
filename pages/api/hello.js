import { pool } from "@/config/db";

export default async function handler(req, res) {
  const [rows] = await pool.query("select NOW()");
  console.log(rows[0]["NOW()"]);

  res.status(200).json(rows[0]["NOW()"]);
}
