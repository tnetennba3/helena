import React from "react"
import styled from "styled-components"

import { COLOR } from "../styles/tokens"

export const Divider = styled.hr`
  border: solid 2px ${COLOR.ACCENT.LIGHT_GREY};
  margin: 1.5rem 0;
`

interface Props {
  children: React.ReactNode
}

export const Hide: React.FC<Props> = ({ children }) => (
  <span aria-hidden="true">{children}</span>
)

export const Japanese: React.FC<Props> = ({ children }) => (
  <span lang="ja">{children}</span>
)
