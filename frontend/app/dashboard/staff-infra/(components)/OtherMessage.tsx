export default function OtherMessage() {
  return (
    <div className="flex">
      <div className="pt-2">
        <div className="flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <img
            className="aspect-square h-full w-full cursor-pointer"
            src="https://avatars.githubusercontent.com/u/124599?v=4"
          />
        </div>
      </div>
      <div className="ml-2">
        <div className="mb-1">
          <span className="text-xs text-gray-600">@achaaoui</span>
        </div>
        <div className="flex gap-1 flex-col text-sm">
          <div className="bg-white rounded-lg rounded-tl-none border p-2 w-fit">
            Hello 1337
          </div>
          <div className="bg-white rounded-lg rounded-tl-none border p-2  w-fit">
            this is another message that is going to be
          </div>
          <div className="bg-white rounded-lg rounded-tl-none border p-2  w-fit">
            followed by this long message that is just a filling, let's see how
            its going to do on line break. well that looks cool tbh.
          </div>
        </div>
      </div>
    </div>
  );
}