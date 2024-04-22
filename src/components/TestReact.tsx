import ogcool from 'ogcool'

const image = ogcool('Wave', {
  modifications: [{
    name: 'Text'
  }]
})

export default function HelloWorld({
  children,
  ...props
}: {
  children: React.ReactNode
}) {
  return children
}
