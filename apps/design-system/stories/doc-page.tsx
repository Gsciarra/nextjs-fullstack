import { PropsWithChildren } from "react";

interface DocPageProps extends PropsWithChildren {
  title: string;
}

export default function DocPage({ title, children }: DocPageProps) {
  return (
    <div className={"flex flex-col justify-center"}>
      <h1 className={"text-center"}>{title}</h1>
      <div className={"flex justify-center items-center gap-4 flex-wrap"}>
        {children}
      </div>
    </div>
  );
}
