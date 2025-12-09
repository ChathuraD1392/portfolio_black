import BaseComponent from "./essentials/BaseComponent";

const Contact = () => {
  return (
    <>
      <BaseComponent title="Contact" marginTop={10} id="contact">
        <form action="">
          <div className="flex justify-around mb-5 space-x-10">
            <input
              type="text"
              placeholder="NAME"
              className="border border-zinc-300 p-2 rounded-md uppercase w-full"
            />
            <input
              type="text"
              placeholder="EMAIL"
              className="border border-zinc-300 p-2 rounded-md uppercase w-full"
            />
          </div>
          <div className="flex justify-around mb-5 space-x-10">
            <input
              type="text"
              placeholder="MOBILE"
              className="border border-zinc-300 p-2 rounded-md uppercase w-full"
            />
            <input
              type="text"
              placeholder="MATTER"
              className="border border-zinc-300 p-2 rounded-md uppercase w-full"
            />
          </div>
          <div className="flex mb-5">
            <textarea
              className="border border-zinc-300 p-2 rounded-md uppercase w-full"
              name=""
              rows={4}
              id=""
              placeholder="DESCRIPTION"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button className="p-2 border rounded-md cursor-pointer">
              SUBMIT
            </button>
          </div>
        </form>
      </BaseComponent>
    </>
  );
};

export default Contact;
