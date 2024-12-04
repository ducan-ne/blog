// deno-lint-ignore ban-ts-comment
// @ts-ignore
import Sandpack from "react-dev/src/components/MDX/Sandpack";

const SandpackFragment = ({ children }: any) => children as any;
SandpackFragment.mdxName = "pre";

type File = { name: string; code: string; active: string; hidden: boolean };

export default function Playground({
  style,
  files,
  ...props
}: {
  style: any;
  files: Array<File>;
}) {
  const newFiles = [
    ...files,
    {
      name: "package.json",
      hidden: true,
      code: JSON.stringify({
        name: "ancyou",
        version: "0.0.0",
        main: "/src/index.js",
        scripts: {
          start: "react-scripts start",
          build: "react-scripts build",
          test: "react-scripts test --env=jsdom",
          eject: "react-scripts eject",
        },
        dependencies: {
          react: "^18.0.0",
          "react-dom": "^18.0.0",
          "react-scripts": "^5.0.0",
          "framer-motion": "7.3.6",
        },
      }),
    },
  ] as Array<File>;
  return (
    <div className="not-prose" style={style}>
      <Sandpack>
        {newFiles.map(({ name, code, active, hidden }, i) => (
          <SandpackFragment key={name}>
            <SandpackFragment
              meta={`${name} ${active && "active"} ${hidden && "hidden"}`}
            >
              {code}
            </SandpackFragment>
          </SandpackFragment>
        ))}
      </Sandpack>
    </div>
  );
}
