import React from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';
import conf from '../conf/conf.js';

export default function RTE({ name, control, label, defaultValue = "" }) {
    return (
        <div className='w-full'>
            {label && (
                <label className='inline-block mb-2 pl-1 text-sm font-medium text-slate-700'>
                    {label}
                </label>
            )}

            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <div className='border border-slate-300 rounded-lg overflow-hidden shadow-sm hover:border-slate-400 transition-colors'>
                        <Editor
                            apiKey={conf.tinymceApiKey}
                            initialValue={defaultValue}
                            init={{
                                initialValue: defaultValue,
                                height: 500,
                                menubar: true,
                                plugins: [
                                    "image",
                                    "advlist",
                                    "autolink",
                                    "lists",
                                    "link",
                                    "image",
                                    "charmap",
                                    "preview",
                                    "anchor",
                                    "searchreplace",
                                    "visualblocks",
                                    "code",
                                    "fullscreen",
                                    "insertdatetime",
                                    "media",
                                    "table",
                                    "code",
                                    "help",
                                    "wordcount",
                                    "anchor",
                                ],
                                toolbar:
                                    "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                                content_style: `
                                    body { 
                                        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
                                        font-size: 16px; 
                                        line-height: 1.6; 
                                        color: #334155;
                                        padding: 20px;
                                    }
                                    h1, h2, h3, h4, h5, h6 {
                                        color: #1e293b;
                                        font-weight: 600;
                                        margin-top: 1.5em;
                                        margin-bottom: 0.5em;
                                    }
                                    p {
                                        margin-bottom: 1em;
                                    }
                                    ul, ol {
                                        margin-bottom: 1em;
                                        padding-left: 1.5em;
                                    }
                                    blockquote {
                                        border-left: 4px solid #6366f1;
                                        padding-left: 1em;
                                        margin: 1em 0;
                                        font-style: italic;
                                        color: #64748b;
                                    }
                                `,
                                skin: 'oxide',
                                content_css: 'default'
                            }}
                            onEditorChange={onChange}
                        />
                    </div>
                )}
            />
        </div>
    )
}
