import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { FilePondFile, FileStatus } from "filepond";
import { Dispatch, SetStateAction, useState } from "react";

registerPlugin(FilePondPluginImagePreview);

export default function FileUpload({
  setFiles,
}: {
  setFiles?: Dispatch<SetStateAction<FilePondFile[] | undefined>>;
}) {
  return (
    <FilePond
      acceptedFileTypes={["image/*"]}
      onupdatefiles={setFiles}
      allowMultiple={false}
      instantUpload={false}
      server={{
        url: process.env["NEXT_PUBLIC_BACKEND_BASEURL"] + "/upload/file",
        fetch: null,
      }}
      name="image"
      labelIdle="Drag & Drop an image if available."
      credits={false}
    />
  );
}
