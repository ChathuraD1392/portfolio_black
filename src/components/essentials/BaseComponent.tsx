import type { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  marginTop: number;
  id: string;
}

const BaseComponent = ({ title, children, marginTop, id }: Props) => {
  return (
    <section className={`w-full mt-${marginTop} min-h-screen`} id={id}>
      <div className="flex justify-around items-center font-extralight text-white text-center">
        <div className="text-left w-6xl">
          <h1 className="text-3xl mb-10">{title}</h1>
          {children}
        </div>
      </div>
    </section>
  );
};

export default BaseComponent;
