import React from "react"

interface Props {
  children: React.ReactNode
}

export const Hide: React.FC<Props> = ({ children }) => (
  <span aria-hidden="true">{children}</span>
)

export const Japanese: React.FC<Props> = ({ children }) => (
  <span lang="ja">{children}</span>
)
