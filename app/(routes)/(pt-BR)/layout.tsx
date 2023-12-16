
import RootLayoutOrigin from '../../_roots/layout'

export default function RootLayout(props:any) {
  {/* @ts-ignore */}
  return <RootLayoutOrigin {...props} locale="pt-BR" />
}

import {generateMetadata as generateMetadataOrigin} from '../../_roots/layout'

export async function generateMetadata(props:any) {
  return generateMetadataOrigin({ ...props, locale: "pt-BR" })
}
