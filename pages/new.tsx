import { useState } from "react";
import { useForm } from "react-hook-form";
import { publishSchema } from "@/schemas/publishSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import Select from "react-select";
import { createPost } from "@/utils/api";
import clsx from "clsx";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const tagOptions = [
  { value: "JavaScript", label: "JavaScript" },
  { value: "Python", label: "Python" },
  { value: "Java", label: "Java" },
  { value: "CSharp", label: "C#" },
  { value: "Ruby", label: "Ruby" },
  { value: "PHP", label: "PHP" },
  { value: "CPlusPlus", label: "C++" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "Swift", label: "Swift" },
  { value: "Go", label: "Go" },
];

export default function New() {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [contentBody, setContentBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleButtonClick = () => {
    setIsInputVisible(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value);
  };

  const handleTagChange = (selected: any) => {
    setSelectedTags(selected);
  };

  const handleContentChange = (value: string) => {
    setContentBody(value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(publishSchema),
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found in local storage");
      setIsSubmitting(false);
      return;
    }

    const postData = {
      title: data.title,
      body: contentBody,
      tags: selectedTags.map((tag: any) => tag.value),
      image: imageUrl,
      user: localStorage.getItem("userId"),
    };

    console.log("Token:", token);
    console.log("Post Data:", postData);

    try {
      await createPost(postData, token);
      console.log("Post created successfully");
      reset();
      setSelectedTags([]);
      setContentBody("");
      setImageUrl("");
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
        onSubmit={handleSubmit(onSubmit)}
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
            {...register("title")}
            className="p-4 font-bold text-5xl border-none focus:outline-none placeholder:font-bold placeholder:text-5xl placeholder:text-[#525252]"
          />
          <div>
            {errors.title && <p>{errors.title.message}</p>}
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
          value={contentBody}
          onChange={handleContentChange}
          placeholder="Write your post content here..."
          className="h-96 p-4 text-2xl border-none focus:outline-none"
        />
        <div className="flex flex-row gap-6 p-4">
          <button
            type="submit"
            className={clsx(
              "text-sm py-2 px-8 rounded-md transition ease duration-300",
              {
                "bg-[#3b49df] text-white hover:bg-[#313cba]": !isSubmitting,
                "bg-gray-400 text-gray-700 cursor-not-allowed": isSubmitting,
              }
            )}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Publishing..." : "Publish"}
          </button>
          <button className="py-2 px-4 text-sm font-light hover:bg-[#3b49df]/5 hover:text-[#313cba] hover:rounded-md hover:py-2 hover:px-4 transition-all duration-300 ease">
            Save draft
          </button>
          <button className="py-2 px-4 text-sm font-light hover:bg-[#3b49df]/5 hover:text-[#313cba] hover:rounded-md hover:py-2 hover:px-4 transition-all duration-300 ease">
            Revert new changes
          </button>
        </div>
      </form>
    </main>
  );
}
