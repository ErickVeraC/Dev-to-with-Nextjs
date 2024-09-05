import { useForm } from "react-hook-form";
import schema from "@/schemas/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function New() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <main className="w-full min-h-screen p-10">
      <section className="flex flex-row justify-between">
        <div>
          <img src="../public/dev-icon" alt="" />
          <h3>Create Post</h3>
        </div>
        <div className="flex gap-4">
          <button>Edit</button>
          <button>Preview</button>
        </div>
        <div>
          <button>X</button>
        </div>
      </section>

      <form
        action=""
        className="h-[85%] flex flex-col w-8/12 bg-white rounded-md mt-4 mb-6"
      >
        <div className="p-4">
          <div className="w-1/3 p-[2.2px] rounded-md transition-all duration-100 ease-in-out hover:border-2 hover:border-[#3b49df]">
            <button className="p-2 rounded-md border border-gray-500/8 font-medium w-full justify-start text-sm ">
              Add cover image
            </button>
          </div>
          <input
            type="text"
            placeholder="New post title here..."
            className="p-4 font-bold text-5xl border-none focus:outline-none placeholder:font-bold placeholder:text-5xl placeholder:text-[#525252]"
          />
          <input
            type="text"
            placeholder="Add up to 4 tags..."
            className="p-4 text-sm border-none focus:outline-none"
          />
        </div>
        <ReactQuill
          placeholder="Write your post content here..."
          className="h-96 p-4 text-2xl border-none focus:outline-none"
        />
      </form>

      <div className="flex flex-row gap-6">
        <button className="text-sm py-2 px-8 bg-[#3b49df] text-white rounded-md hover:bg-[#313cba] transition ease duration-300">
          Publish
        </button>
        <button className="py-2 px-4 text-sm font-light hover:bg-[#3b49df]/5 hover:text-[#313cba] hover:rounded-md hover:py-2 hover:px-4 transition-all duration-300 ease">
          Save draft
        </button>
        <button className="py-2 px-4 text-sm font-light hover:bg-[#3b49df]/5 hover:text-[#313cba] hover:rounded-md hover:py-2 hover:px-4 transition-all duration-300 ease">
          Revert new changes
        </button>
      </div>
    </main>
  );
}
