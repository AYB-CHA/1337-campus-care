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
import { useState } from "react";

import axios from "@/lib/axios";
import { isAxiosError } from "axios";
import FileUpload from "@/components/FileUpload";
import { FilePondFile, FileStatus } from "filepond";
import Alert from "@/components/Alert";

export default function NewTicket({ mutator }: { mutator: any }) {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState<FilePondFile[]>();

  async function handelFormSubmission() {
    try {
      setLoading(true);
      setError(null);
      let image: string | null = null;
      if (files?.length && files[0].status == FileStatus.PROCESSING_COMPLETE) {
        image = files[0].serverId;
      }

      await axios.post("/staff-infra/", { title, description, image });
      setTitle("");
      setDescription("");
      mutator();
      setOpen(false);
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.status == 400)
          setError(error.response.data.message[0]);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
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
          {error && <Alert error={error} />}
          <Input
            placeholder="Title"
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Input
            placeholder="Description"
            type="textarea"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <div>
            <FileUpload setFiles={setFiles} />
          </div>
          <DialogFooter>
            <Button loading={loading} onClick={handelFormSubmission}>
              Submit Ticket
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
