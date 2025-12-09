interface Props {
  title: string;
  para: string;
}

const Card = ({ title, para }: Props) => {
  return (
    <div className="w-[20em] min-h-[400px] shadow-sm border rounded-sm p-5">
      <div className="items-center text-center">
        <h2 className="mb-5">{title}</h2>
        <hr className="border-0 h-px bg-white w-full mb-5 " />
        <p className="mb-5">{para}</p>
        <div className="">
          <button className="btn btn-primary rounded-sm">
            See Projects...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
