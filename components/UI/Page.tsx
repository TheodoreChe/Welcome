import { ReactElement } from 'react'
import css from './Page.module.scss'

type Props = {
  center?: boolean
  children: ReactElement
}

export function Page({ children, center }: Props) {
  return <div className={[css.page, center && css.center].filter(Boolean).join(' ')}>{children}</div>
}
