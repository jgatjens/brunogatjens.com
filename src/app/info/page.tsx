import { permanentRedirect } from "next/navigation";

export default function InfoPage() {
  permanentRedirect("/about");
}
