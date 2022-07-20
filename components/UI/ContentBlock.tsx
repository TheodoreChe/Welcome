import { ReactNode } from 'react'
import css from './ContentBlock.module.scss'

type Props = {
  children: ReactNode
}

export function ContentBlock({ children }: Props) {
  return <div className={css.contentBlock}>{children}</div>
}
