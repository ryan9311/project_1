import styled from '@emotion/styled'
import Image from 'next/image'
import { BodyContainer, Logo } from '..'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import handler from '../api/posts'

const signupPage = () => {
  const router = useRouter()

  // 아이디,비밀번호, 닉네임 확인
  const [userId, setUserId] = useState('')
  const [userPw, setUserPw] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [nickName, setNickName] = useState('')

  // 오류메세지 상태 저장
  const [IDErrMsg, setIDErrMsg] = useState('')
  const [PwErrMsg, setPwErrMsg] = useState('')
  const [PwCheckErrMsg, setPwCheckErrMsg] = useState('')
  const [NickErrMsg, setNickErrMsg] = useState('')

  // 유효성 검사
  const [isId, setIsId] = useState(false)
  const [isPwd, setIsPwd] = useState(false)
  const [isCheckPwd, setIsCheckPwd] = useState(false)
  const [isNickname, setIsNickName] = useState(false)

  const IdInputRef = useRef(null)
  const PWInputRef = useRef(null)
  const PwCheckInputRef = useRef(null)
  const NickInputRef = useRef(null)

  let check = false

  const onIdChange = (e) => {
    const idReg = /^[a-zA-Z0-9]{6,16}$/
    const IdCurrent = e.currentTarget.value
    setUserId(IdCurrent)
    if (!idReg.test(IdCurrent)) {
      //  alert('재입력')
      setIDErrMsg('아이디 형식이 올바르지 않습니다')
      setIsId(false)
      IdInputRef.current.focus()
      check = true
    } else {
      // alert('성공!')
      setIDErrMsg('사용 가능한 아이디 입니다')
      setIsId(true)
    }
  }
  console.log(setIsId)

  const onPwdChange = (e) => {
    const pwdReg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/
    const PwCurrent = e.currentTarget.value
    setUserPw(PwCurrent)
    if (!pwdReg.test(PwCurrent)) {
      setPwErrMsg('비밀번호 형식이 올바르지 않습니다')
      setIsPwd(false)
      PWInputRef.current.focus()
      check = true
    } else {
      setPwErrMsg('안전한 비밀번호 입니다')
      setIsPwd(true)
    }
  }

  const onchectPwdChange = (e) => {
    const PwdConfirm = e.currentTarget.value
    setIsCheckPwd(PwdConfirm)
    if (userPw === PwdConfirm) {
      setPwCheckErrMsg('비밀번호를 똑같이 입력했어요!')
      setIsCheckPwd(true)
      PwCheckInputRef.current.focus()
      check = true
    } else {
      setPwCheckErrMsg('비밀번호를 다시 입력해주세요')
      setIsCheckPwd(false)
    }
  }

  const onNickNameChange = (e) => {
    const NicknameReg = e.currentTarget.value
    setNickName(NicknameReg)
    if (NicknameReg.lenght < 2 || NicknameReg >= 5) {
      setNickErrMsg('닉네임은 두글자 이상 다섯글자 이하로 입력해주세요')
      setIsNickName(false)
      NickInputRef.current.focus()
      check = true
    } else {
      setNickErrMsg('')
      setIsNickName(true)
    }
  }

  // onJoinBtnClick props로 전달해주기
  const onJoinBtnClick = () => {
    axios
      .post('api/posts', {
        userId: IdInputRef.current.value,
        userPw: PWInputRef.current.value,
        nickName: NickInputRef.current.value,
      })
      .then((res) => {
        console.log('res.data : ', res.body)
        // router.replace('/pages')
        alert('회원가입 성공!')
        router.replace('../')
      })
      .catch((err) => console.log(err, '실패'))
  }
  return (
    <BodyContainer>
      <div>
        <Logo></Logo>
      </div>
      <form onSubmit={handler}>
        <div>
          <InputWrap>
            <Input
              name="ID"
              type="text"
              placeholder="ID를 입력해주세요"
              ref={IdInputRef}
              onChange={onIdChange}
            />
            <p>{IDErrMsg}</p>
          </InputWrap>
          <InputWrap>
            <Input
              name="Nickname"
              type="text"
              placeholder="닉네임을 입력해주세요"
              ref={NickInputRef}
              onChange={onNickNameChange}
            />
            <p>{NickErrMsg}</p>
          </InputWrap>
          <InputWrap>
            <Input
              name="Password"
              type="password"
              placeholder="비밀번호"
              ref={PWInputRef}
              onChange={onPwdChange}
            />
            <p>{PwErrMsg}</p>
          </InputWrap>
          <InputWrap>
            <Input
              type="password"
              placeholder="비밀번호 확인"
              ref={PwCheckInputRef}
              onChange={onchectPwdChange}
            />
            <p>{PwCheckErrMsg}</p>
          </InputWrap>
          <Button onClick={onJoinBtnClick}>가입하기</Button>
        </div>
      </form>
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
