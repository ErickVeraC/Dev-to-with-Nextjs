import { useState } from "react";
import { useForm } from "react-hook-form";
import { createPost } from "@/utils/api";
import clsx from "clsx";
import { useRouter } from "next/router";
import CreatePostMenu from "@/components/CreatePostMenu";

export default function NewPost() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [tagsArray, setTagsArray] = useState([]);
  const [tagPlaceholder, setTagPlaceholder] = useState("Add up to 4 tags...");
  const [message, setMessage] = useState("");

  const [isInputVisible, setIsInputVisible] = useState(false);
  const router = useRouter();

  const handleTagInput = (event) => {
    if (tagsArray.length >= 4) {
      event.preventDefault();
      return;
    }

    const target = event.target;

    if (event.key === " " && target.value.trim()) {
      const newTag = target.value.trim();
      if (!tagsArray.includes(newTag)) {
        setTagsArray([...tagsArray, newTag]);
      }
      target.value = "";
      event.preventDefault();
    }

    const remainingTags = 4 - tagsArray.length - 1;
    setTagPlaceholder(
      remainingTags > 0 ? `You can add ${remainingTags} more tags` : ""
    );
  };

  const handleRemoveTag = (index) => {
    const updatedTags = tagsArray.filter((_, i) => i !== index);
    setTagsArray(updatedTags);
    const remainingTags = 4 - updatedTags.length;
    setTagPlaceholder(
      remainingTags > 0
        ? `You can add ${remainingTags} more tags`
        : "Add up to 4 tags..."
    );
  };

  const onSubmit = async (data) => {
    console.log("Publishing started...");
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      const postData = { ...data, tags: tagsArray };
      const result = await createPost(postData, token);
      console.log("Post Data:", result);
      router.push("/");
    } catch (error) {
      console.error("Error submitting post:", error);
    } finally {
      console.log("Publishing finished.");
    }
  };

  return (
    <>
      <CreatePostMenu />
      <div className="container w-full ml-6 py-6 grid grid-cols-12">
        <section className="col-span-10">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white rounded-lg p-6">
              <div className="w-1/3 p-2 rounded-md transition-all duration-100 ease-in-out hover:border-2 hover:border-[#3b49df]">
                {isInputVisible ? (
                  <input
                    type="url"
                    className="p-2 rounded-md border border-gray-500/8 font-medium w-full justify-start text-sm"
                    placeholder="Enter image URL"
                    {...register("image", { required: true })}
                  />
                ) : (
                  <button
                    type="button"
                    className=""
                    onClick={() => setIsInputVisible(true)}
                  >
                    Add a cover image
                  </button>
                )}
                {errors.image && (
                  <p className="text-red-500">Image URL is required</p>
                )}
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  className="p-4 font-bold text-5xl border-none focus:outline-none placeholder:font-bold placeholder:text-5xl placeholder:text-[#525252]"
                  placeholder="New post title here..."
                  {...register("title", { required: true })}
                  onFocus={() =>
                    setMessage(
                      "Writing a Great Post Title\nThink of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.\nUse keywords where appropriate to help ensure people can find your post by search."
                    )
                  }
                  onBlur={() => setMessage("")}
                />
                {errors.title && (
                  <p className="text-red-500">Title is required</p>
                )}
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  className="w-full mt-2 p-3 text-lg rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                  placeholder={tagPlaceholder}
                  onKeyDown={handleTagInput}
                  onFocus={() =>
                    setMessage(
                      "Tagging Guidelines\nTags help people find your post - think of them as the topics or categories that best describe your post.\nAdd up to four comma-separated tags per post. Use existing tags whenever possible.\nSome tags have special posting guidelines - double check to make sure your post complies with them."
                    )
                  }
                  onBlur={() => setMessage("")}
                />
                <div className="flex flex-wrap space-x-2 mt-2">
                  {tagsArray.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#3b49df] text-white text-xs rounded-md px-4 py-2"
                    >
                      {tag}
                      <button
                        type="button"
                        className="ml-2 text-white"
                        onClick={() => handleRemoveTag(index)}
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <textarea
                  className="w-full p-3 text-lg rounded-md focus:outline-none focus:ring focus:ring-indigo-500 h-96"
                  placeholder="Write your post content here..."
                  {...register("body", { required: true })}
                  onFocus={() =>
                    setMessage(
                      "Editor Basics\nUse Markdown to write and format posts.\nCommonly used syntax\nEmbed rich content such as Tweets, YouTube videos, etc. Use the complete URL: {% embed https://... %}. See a list of supported embeds.\nIn addition to images for the post's content, you can also drag and drop a cover image."
                    )
                  }
                  onBlur={() => setMessage("")}
                />
                {errors.body && (
                  <p className="text-red-500">Content is required</p>
                )}
              </div>
            </div>
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
          </form>
        </section>
        <aside className="col-span-2 p-2">
          {message && (
            <div className="text-gray-500">
              <p>{message}</p>
            </div>
          )}
        </aside>
      </div>
    </>
  );
}
