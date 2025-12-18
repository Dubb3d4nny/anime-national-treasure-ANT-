import { Dispatch, SetStateAction } from "react";

interface Props {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

// Placeholder avatar URLs (replace with actual anime avatar images in /public/avatars)
const avatars = [
  "/avatars/avatar1.png",
  "/avatars/avatar2.png",
  "/avatars/avatar3.png",
  "/avatars/avatar4.png",
  "/avatars/avatar5.png",
  "/avatars/avatar6.png",
];

export default function AvatarCarousel({ selected, setSelected }: Props) {
  return (
    <div className="flex overflow-x-auto gap-4 py-2">
      {avatars.map((av) => (
        <img
          key={av}
          src={av}
          alt="avatar"
          className={`w-16 h-16 rounded-full cursor-pointer border-4 ${
            selected === av ? "border-blue-400" : "border-transparent"
          }`}
          onClick={() => setSelected(av)}
        />
      ))}
    </div>
  );
}
