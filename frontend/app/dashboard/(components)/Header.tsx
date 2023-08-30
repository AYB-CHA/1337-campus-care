"use client";

import Logo from "../../../components/Logo";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import useSWR from "swr";
import axios from "@/lib/axios";
import { AxiosError, isAxiosError } from "axios";
import { LogOut, Settings, User } from "lucide-react";
import { User as UserType } from "@/app/auth/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/DropDown";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/Dialog";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import FileUpload from "@/components/FileUpload";
import Input from "@/components/Input";
import { FilePondFile, FileStatus } from "filepond";
import Alert from "@/components/Alert";

async function getUser(endpoint: string) {
  let response = await axios.get<UserType>(endpoint);
  return response.data;
}

function logOut() {
  Cookies.remove("access_token");
  redirect("/");
}

export default function Header() {
  const [profileDialog, setProfileDialog] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [files, setFiles] = useState<FilePondFile[]>();
  const [validationError, setValidationError] = useState<string | null>(null);

  let { data, error, mutate } = useSWR<UserType, AxiosError>(
    "/auth/me",
    getUser
  );
  if (error?.response?.status == 401) logOut();
  else if (error) redirect("/error");

  useEffect(() => {
    setFirstName(data?.firstname ?? "");
    setLastName(data?.lastname ?? "");
  }, [data]);

  const updateProfileHandler = async () => {
    let image: string | null = null;
    if (files?.length && files[0].status == FileStatus.PROCESSING_COMPLETE) {
      image =
        process.env["NEXT_PUBLIC_BACKEND_BASEURL"] +
        "/upload/" +
        files[0].serverId;
    }

    try {
      await axios.put<UserType>("/user", {
        firstname: firstName,
        lastname: lastName,
        avatar: image,
      });
      mutate();
      setValidationError(null);
      setProfileDialog((state) => !state);
    } catch (responseError) {
      if (isAxiosError(responseError)) {
        if (responseError.response?.status == 400)
          setValidationError(responseError.response.data.message[0]);
      }
    }
  };

  return (
    <div>
      <div className="px-4 py-2 flex justify-between border-b items-center bg-white">
        <Logo />
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <img
                  className="aspect-square h-full w-full cursor-pointer"
                  src={data?.avatar}
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52 mr-4" sideOffset={10}>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => setProfileDialog((state) => !state)}
              >
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logOut}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Dialog open={profileDialog} onOpenChange={setProfileDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Your Profile</DialogTitle>
              <DialogDescription>
                Here you can change your profile settings.
              </DialogDescription>
            </DialogHeader>
            <div>{validationError && <Alert error={validationError} />}</div>
            <Input
              placeholder="First name"
              type="text"
              value={"@" + data?.username ?? ""}
              disabled
            />
            <Input
              placeholder="First name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              placeholder="Last name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <div>
              <FileUpload setFiles={setFiles} />
            </div>
            <DialogFooter>
              <Button onClick={updateProfileHandler}>Edit Profile</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
