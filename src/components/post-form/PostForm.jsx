import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-z0-9._-]+/g, "-") // only valid chars
                .replace(/^-+/, "") // remove leading hyphens
                .replace(/-+$/, "") // remove trailing hyphens
                .slice(0, 36); // limit to 36 chars

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <div className="max-w-6xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">
                    {post ? 'Edit Post' : 'Create New Post'}
                </h1>
                <p className="text-slate-600">
                    {post ? 'Update your post content and settings' : 'Share your story with the world'}
                </p>
            </div>
            
            <form onSubmit={handleSubmit(submit)} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <Input
                            label="Title"
                            placeholder="Enter your post title"
                            className="mb-4"
                            {...register("title", { required: true })}
                        />
                        <Input
                            label="Slug"
                            placeholder="post-url-slug"
                            className="mb-4"
                            {...register("slug", { required: true })}
                            onInput={(e) => {
                                setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                            }}
                        />
                        <RTE label="Content" name="content" control={control} defaultValue={getValues("content")} />
                    </div>
                    
                    <div className="space-y-6">
                        <div className="bg-slate-50 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-slate-800 mb-4">Post Settings</h3>
                            
                            <Input
                                label="Featured Image"
                                type="file"
                                className="mb-4"
                                accept="image/png, image/jpg, image/jpeg, image/gif"
                                {...register("image", { required: !post })}
                            />
                            
                            {post && (
                                <div className="w-full mb-4">
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Current Image
                                    </label>
                                    <img
                                        src={appwriteService.getFilePreview(post.featuredImage)}
                                        alt={post.title}
                                        className="w-full h-32 object-cover rounded-lg border border-slate-200"
                                    />
                                </div>
                            )}
                            
                            <Select
                                options={["active", "inactive"]}
                                label="Status"
                                className="mb-6"
                                {...register("status", { required: true })}
                            />
                            
                            <Button 
                                type="submit" 
                                className={`w-full ${post ? 'bg-green-600 hover:bg-green-700' : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'}`}
                            >
                                {post ? "Update Post" : "Publish Post"}
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}