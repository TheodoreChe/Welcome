import css from './Markdown.module.scss'

type Props = {
  content: string
}

export function Markdown({ content }: Props) {
  return <div className={css.markdown} dangerouslySetInnerHTML={{ __html: content }} />
}
