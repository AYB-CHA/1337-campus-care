"use client";
import Button from "@/components/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";
import Input from "@/components/Input";
import { useEffect, useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { FilePondFile, FileStatus } from "filepond";
registerPlugin(FilePondPluginImagePreview);

export default function NewTicket() {
  const [files, setFiles] = useState<FilePondFile[]>();

  //   console.log(FileStatus);
  //   useEffect(() => {
  //     if (files) console.log(files?.map((item) => item.status));
  //   }, [files]);

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add new ticket</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add new ticket about the infra.</DialogTitle>
            <DialogDescription>
              This action will notify the staff and they will make an action
              when it's possible.
            </DialogDescription>
          </DialogHeader>
          <Input placeholder="Title" type="text" />
          <Input placeholder="Description" type="textarea" />
          <div>
            <FilePond
              acceptedFileTypes={["image/*"]}
              onupdatefiles={setFiles}
              allowMultiple={false}
              server={
                process.env["NEXT_PUBLIC_BACKEND_BASEURL"] + "/uploadfile"
              }
              name="image"
              labelIdle="Drag & Drop an image if available."
              credits={false}
            />
          </div>
          <DialogFooter>
            <Button>Submit Ticket</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
