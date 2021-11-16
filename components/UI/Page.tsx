import { ReactElement } from 'react'
import css from './Page.module.scss'

type Props = {
  children: ReactElement
}

export function Page({ children }: Props) {
  return <div className={css.page}>{children}</div>
}
