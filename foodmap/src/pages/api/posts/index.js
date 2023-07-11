const handler = async (req, res) => {
  console.log(process.env.DB_HOST)

  if (req.method === 'POST') {
    let conn = null
    try {
      let sql = `
            INSERT INTO tbl_users
            (userId, userPw, nickName)
            VALUES
            (?, ?, ?)
          `
      conn = await pool.getConnection()
      let [result] = conn.query(sql, [
        req.body.userId,
        req.body.userPw,
        req.body.nickName,
      ])
      res.send(result)
      res.status(201).json(result)

      return
    } catch (err) {
      res.status(500).json({ err, message: '서버오류발생' })
      console.log(req.body)
      //   return
    } finally {
      if (conn !== null) conn.release()
    }
    return
  }
}

export default handler
