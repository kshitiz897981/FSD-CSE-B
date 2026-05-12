import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'

// control gives the full control to the parent element calling it //
//render- in the given case,whenever there is a change in the given field,inform to me by rendering//
//init-whatever values you want in it whenever it is initialized//

/*Controller is used here because TinyMCE(Editor) is a controlled third-party component. Controller manually connects its value
 and change handler to react-hook-form, ensuring form state, validation, and reset work correctly.
 
 TinyMCE is a rich text editor (RTE) — basically a Word-like text editor for the web that you can embed inside your
  React (or any) application.
 */

export default function RTE({name,control,label,defaultValue=""}) {
  return (
    <div className='w-full'>
      {label&&<label className='inline-block mb-1 pl-1'>
        {label}
        </label>}
      <Controller
       name={name||"content"}
       control={control}
       defaultValue={defaultValue}
       render={({field:{onChange}})=>(
       <Editor
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
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
       )}
      />  
    </div>
  )
}

