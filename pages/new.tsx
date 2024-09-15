import { useState } from "react";
import { useForm } from "react-hook-form";
import { publishSchema } from "@/schemas/publishSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import Select from "react-select";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const tagOptions = [
  { value: "tag1", label: "Tag 1" },
  { value: "tag2", label: "Tag 2" },
  { value: "tag3", label: "Tag 3" },
  { value: "tag4", label: "Tag 4" },
  { value: "tag5", label: "Tag 5" },
  { value: "tag6", label: "Tag 6" },
  { value: "tag7", label: "Tag 7" },
  { value: "tag8", label: "Tag 8" },
  { value: "tag9", label: "Tag 9" },
  { value: "tag10", label: "Tag 10" },
];

export default function New() {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const handleButtonClick = () => {
    setIsInputVisible(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value);
  };

  const handleTagChange = (selected: any) => {
    setSelectedTags(selected);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(publishSchema),
  });

  return (
    <main className="w-full min-h-screen p-10">
      <section className="flex flex-row justify-between">
        <div className="flex flex-row">
          <Link href={"/"}>
            <img className="h-10" src="/dev-icon.png" alt="" />
          </Link>
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
            {isInputVisible ? (
              <input
                type="text"
                value={imageUrl}
                onChange={handleInputChange}
                className="p-2 rounded-md border border-gray-500/8 font-medium w-full justify-start text-sm"
                placeholder="Enter image URL"
              />
            ) : (
              <button
                onClick={handleButtonClick}
                className="p-2 rounded-md border border-gray-500/8 font-medium w-full justify-start text-sm"
              >
                Add cover image
              </button>
            )}
          </div>
          <input
            type="text"
            placeholder="New post title here..."
            className="p-4 font-bold text-5xl border-none focus:outline-none placeholder:font-bold placeholder:text-5xl placeholder:text-[#525252]"
          />
          <div>
            <Select
              isMulti
              name="tags"
              options={tagOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="Add up to 4 tags..."
              value={selectedTags}
              onChange={handleTagChange}
              isOptionDisabled={() => selectedTags.length >= 4}
            />
          </div>
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
