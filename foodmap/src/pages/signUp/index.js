import styled from '@emotion/styled'
import Image from 'next/image'
import { BodyContainer, Logo } from '..'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import axios from 'axios'

const signupPage = () => {
  const handler = async (req, res) => {
    console.log(process.env)

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

  const [Id, setId] = useState('')
  const [Pwd, setPwd] = useState('')
  const [NickName, setNickName] = useState('')
  // props로 전달해주기
  // 오류메세지 상태 저장
  const [IDErrMsg, setIDErrMsg] = useState('')
  const [PwErrMsg, setPwErrMsg] = useState('')
  const [NickErrMsg, setNickErrMsg] = useState('')

  const [isId, setIsId] = useState(false)
  const [isPwd, setIsPwd] = useState(false)
  const [isCheckPwd, setCheckPwd] = useState(false)
  const [isNickname, setIsNickName] = useState(false)

  // props로 전달해주기
  const IdInputRef = useRef(null)
  const PWInputRef = useRef(null)
  const NickInputRef = useRef(null)

  // onJoinBtnClick props로 전달해주기
  const onJoinBtnClick = (e) => {
    // 입력창에 입력된 문자열 값
    // const Id = IdInputRef.currentTarget.value

    // const Pwd = PWInputRef.currentTarget.value
    // const NickName = NickInputRef.currentTarget.value

    // let check = false
    // 아이디 비밀번호 닉네임이 입력되어있지 않다면 에러메세지 보여주기

    setIsId(e.currentTarget.value)
    const idReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
    if (!idReg.test(e.currentTarget.value)) {
      setIDErrMsg('아이디 형식이 올바르지 않습니다')
      setIsId(false)
      // IdInputRef.current.focus()
    } else {
      alert('입력성공!')
      setIDErrMsg('사용 가능한 아이디 입니다')
      setIsId(true)
    }

    setIsPwd(e.currentTarget.value)
    const pwdReg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/
    if (!pwdReg.test(e.currentTarget.value)) {
      setPwErrMsg('비밀번호 형식이 올바르지 않습니다')
      setIsPwd(false)
    } else {
      setPwErrMsg('안전한 비밀번호 입니다')
      setIsPwd(true)
    }

    const PwdConfirm = e.currentTarget.value
    setCheckPwd(e.currentTarget.value)
    if (Pwd !== PwdConfirm) {
      setCheckPwd(false)
    } else {
      setCheckPwd(true)
    }

    setNickName(e.currentTarget.value)
    const NicknameReg = e.currentTarget.value
    if (NicknameReg.lenght < 2 || NicknameReg.lenght > 5) {
      setNickErrMsg('닉네임은 두글자 이상 다섯글자 이하로 입력해주세요')
      setIsNickName(false)
    } else {
      setNickErrMsg('')
      setIsNickName(true)
    }
    // 다 정상입력 되었다면 성공했다고 alert창 띄어주기

    //  if (!isId && isPwd === true && isNickname === true) {
    //    axios
    //     .post('/', {
    //        userId: isId,
    //       userPw: isPwd,
    //        nickName: isNickname,
    //      })
    //      .then((res) => {
    //        console.log(res)
    //        // router.replace('/pages')
    //       //   alert(`추가완료! 추가된아이디:${res.data.Id}`)
    //       //   router.replace('/')
    //     })
    //     .catch((err) => console.log(err))
    //  }
    if (isId !== '' && isPwd !== '' && isNickname !== '') {
      axios
        .post('/', {
          userId: Id,
          userPw: Pwd,
          nickName: NickName,
        })
        .then((res) => {
          console.log('res : ', res)
          // router.replace('/pages')
          alert(`추가완료! 추가된아이디:${res.data.nickName}`)
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
          <Input
            type="text"
            placeholder="ID를 입력해주세요"
            // ref={IdInputRef}
            //  onChange={onIdChange}
          />
        </InputWrap>
        <div>
          <Input
            type="text"
            placeholder="닉네임을 입력해주세요"
            // ref={NickInputRef}
            //  onChange={onNickNameChange}
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="비밀번호"
            // ref={PWInputRef}
            // onChange={onPwdChange}
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="비밀번호 확인"
            //    onChange={onchectPwdChange}
          />
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
