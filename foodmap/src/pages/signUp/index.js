import styled from '@emotion/styled'
import Image from 'next/image'
import { BodyContainer, Logo } from '..'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import axios from 'axios'

const signupPage = () => {
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
        conn.query(sql, [req.body.userId, req.body.userPw, req.body.nickName])
        // console.log(result.insertId)
        // let [result2] = await conn.query(
        //   'SELECT * FROM tbl_users WHERE id = ?',
        //   result.insertId,
        // )
        // console.log(result2[0])
        res.status(201).json({ message: 'POST 요청에 대한 응답' })
        return
      } catch (err) {
        res.status(500).json({ message: '서버오류발생' })
        return
      } finally {
        if (conn !== null) conn.release()
      }
    }
  }

  const router = useRouter()
  // props로 전달해주기
  const [IDErrMsg, setIDErrMsg] = useState('')
  const [PwErrMsg, setPwErrMsg] = useState('')
  const [NickErrMsg, setNickErrMsg] = useState('')

  // props로 전달해주기
  const IdInputRef = useRef(null)
  const PWInputRef = useRef(null)
  const NickInputRef = useRef(null)

  // onJoinBtnClick props로 전달해주기
  const onJoinBtnClick = () => {
    // 입력창에 입력된 문자열 값
    const UserID = IdInputRef.current.value

    const UserPw = PWInputRef.current.value
    const UserNickName = NickInputRef.current.value

    // let check = false
    // 아이디 비밀번호 닉네임이 입력되어있지 않다면 에러메세지 보여주기

    if (!UserID) {
      setIDErrMsg('아이디는 필수 입력 값입니다')
      IdInputRef.current.focus()
    } else {
      setIDErrMsg('')
    }

    if (!UserPw) {
      setPwErrMsg('비밀번호는 필수 입력 값입니다')

      PWInputRef.current.focus()
    } else {
      setPwErrMsg('')
    }

    if (!UserNickName) {
      setNickErrMsg('닉네임은 필수 입력 값입니다')
      NickInputRef.current.focus()
    } else {
      setNickErrMsg('')
    }
    // 다 정상입력 되었다면 성공했다고 alert창 띄어주기

    if (UserID !== '' && UserPw !== '' && UserNickName !== '') {
      axios
        .post('/', {
          userId: UserID,
          userPw: UserPw,
          nickName: UserNickName,
        })
        .then((res) => {
          // console.log(res)
          // router.replace('/pages')
          alert(`추가완료! 추가된아이디:${res.data.UserID}`)
          router.replace('/')
        })
        .catch((err) => console.log(err))
    }
  }
  return (
    <BodyContainer>
      <div>
        <Logo></Logo>
      </div>
      <div>
        <InputWrap>
          <Input type="text" placeholder="ID를 입력해주세요" ref={IdInputRef} />
        </InputWrap>
        <div>
          <Input
            type="text"
            placeholder="닉네임을 입력해주세요"
            ref={NickInputRef}
          />
        </div>
        <div>
          <Input type="password" placeholder="비밀번호" ref={PWInputRef} />
        </div>
        <div>
          <Input type="password" placeholder="비밀번호 확인" />
        </div>
        <Button onClick={onJoinBtnClick}>가입하기</Button>
      </div>
    </BodyContainer>
  )
}

export default signupPage
export const SignupWrap = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  margin: 0 auto;
  position: fixed;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff7f7;
`
export const InputWrap = styled.div`
  // height: 20px;
  margin: 0px;
`
export const Input = styled.input`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 400px;
  height: 30px;
  font-size: 1rem;
  background: rgba(250, 250, 250);
  text-align: left;
  padding: 9px 0 7px 8px;
  border: 0.1px solid gray;
  border-radius: 5px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 200px;
  height: 40px;
  background-color: #3a8ef0;
  border-radius: 15px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  color: whitesmoke;
  border: none;
  margin-bottom: 20px;
  margin-top: 20px;
  cursor: pointer;
`
