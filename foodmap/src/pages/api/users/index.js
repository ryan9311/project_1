import bcrypt from 'bcryptjs'

// /api/users 로 요청이 발생하면 실행
const handler = async (req, res) => {
  if (req.method === 'POST') {
    let { Id, Pwd, NickName } = req.body
    // db에 새롭게 추가
    // console.log('원래 비밀번호', pw)
    let enPw = await bcrypt.hash(Pwd, 10)
    // console.log(enPw)
    let conn = null
    try {
      let sql = `
            INSERT INTO tbl_users
            (userId, userPw, nickName)
            VALUES
            (?, ?, ?)
        `
      conn = await pool.getConnection()
      let [result] = await conn.query(sql, [Id, enPw, NickName])
      if (result.affectedRows === 0) {
        res.status(500).json(result[0])
        return
      }
      // console.log(result)

      //회원가입된 정보를 응답으로 보내주기
      let [result2] = await conn.query(
        'SELECT * FROM tbl_users WHERE userId=?',
        Id,
      )
      res.status(200).json(result2[0])
    } catch (err) {
      res.status(500).json({ message: '서버오류발생!' })
    } finally {
      if (conn !== null) conn.release()
    }
    //db에 id, enPw, userName 새롭게 추가

    // db에 비밀번호를 그대로 추가? X
    // 비밀번호 암호화

    return
  }

  // res.status(405).json({ message: '허용되지 않은 메소드' })
}
export default handler
