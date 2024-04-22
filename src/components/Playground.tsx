// deno-lint-ignore ban-ts-comment
// @ts-ignore
import Sandpack from 'react-dev/src/components/MDX/Sandpack'

const SandpackFragment = ({ children }: any) => children as any
SandpackFragment.mdxName = 'pre'

export default function Playground({
  files,
  ...props
}: {
  files: Array<{ name: string, code: string, active: string }>
}) {
  return (
    <div className="not-prose">
      <Sandpack>
        {files.map(({ name, code, active }, i) => (
          <SandpackFragment key={name}>
            <SandpackFragment meta={`${name} ${active && 'active'}`}>
              {code}
            </SandpackFragment>
          </SandpackFragment>
        ))}
      </Sandpack>
    </div>
  )
}
