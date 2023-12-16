
import ProjetosPageOrigin from '../../../_roots/projetos/page'
import { Router } from 'next-roots'

export default function ProjetosPage(props:any) {
  Router.setPageHref("/es-VE/proyectos")
  {/* @ts-ignore */}
  return <ProjetosPageOrigin {...props} pageHref={Router.getPageHref()} />
}
