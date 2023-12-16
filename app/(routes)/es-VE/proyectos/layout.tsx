
import ProjetosLayoutOrigin from '../../../_roots/projetos/layout'

export default function ProjetosLayout(props:any) {
  {/* @ts-ignore */}
  return <ProjetosLayoutOrigin {...props} locale="es-VE" />
}

import {generateMetadata as generateMetadataOrigin} from '../../../_roots/projetos/layout'

export async function generateMetadata(props:any) {
  return generateMetadataOrigin({ ...props, locale: "es-VE" })
}
