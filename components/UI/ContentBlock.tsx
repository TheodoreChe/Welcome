import { ReactElement } from 'react'
import css from './ContentBlock.module.scss'

type Props = {
  children: ReactElement
}

export function ContentBlock({ children }: Props) {
  return <div className={css.contentBlock}>{children}</div>
}
