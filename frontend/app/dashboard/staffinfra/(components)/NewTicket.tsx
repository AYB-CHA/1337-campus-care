import Button from "@/components/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";

export default function NewTicket() {
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
        </DialogContent>
      </Dialog>
    </div>
  );
}
