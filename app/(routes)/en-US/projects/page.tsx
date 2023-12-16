
import ProjetosPageOrigin from '../../../_roots/projetos/page'
import { Router } from 'next-roots'

export default function ProjetosPage(props:any) {
  Router.setPageHref("/en-US/projects")
  {/* @ts-ignore */}
  return <ProjetosPageOrigin {...props} pageHref={Router.getPageHref()} />
}
