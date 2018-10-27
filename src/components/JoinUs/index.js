import React from 'react'
import styled from 'styled-components'
import { Button } from '../Styles'

const MailingListWrapper = styled.div`
  -webkit-box-shadow: 0 -2px 5px #999;
  display: flex;
  flex-direction: column;
  background-color: black;
  align-items: center;
  color: white;
  padding: 50px 0;
  & > p {
    margin: 0 0 10px 0;
    color: gold;
    &.uppercase {
      margin-top: 20px;
      text-transform: uppercase;
    }
  }
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 5px solid white;
`

const StyledWord = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
  color: ${props => props.textColor || 'white'};
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 10px;
  color: white;
`

const StyledInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 4px solid gold;
  margin-bottom: 20px;
  line-height: 32px;
  color: white;
  font-size: 16px;
  letter-spacing: 1px;
  &::placeholder {
    text-transform: uppercase;
  }
  &:focus {
    color: white;
  }
`

function JoinUs() {
  return (
    <MailingListWrapper>
      <TitleWrapper>
        <StyledWord textColor="gold">Join</StyledWord>
        <StyledWord>Us</StyledWord>
      </TitleWrapper>
      <p className="uppercase">Join our mailing list!</p>
      <p>Never miss an update</p>
      <InputWrapper>
        <StyledInput type="text" placeholder="your email" />
        <Button>Sign Up</Button>
      </InputWrapper>
    </MailingListWrapper>
  )
}

export default JoinUs
