import styled from "styled-components"
import { fontSize } from "./constants"
import { FC } from "react"

type Props = {
  text : string
  className : string
}

export const Text: FC<Props> = ({text , className = ""}) => {
  return <Wrapper className={className}>{text}</Wrapper>
}

const Wrapper = styled.p`
  font-size : ${fontSize.m}
  `