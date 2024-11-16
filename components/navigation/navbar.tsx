import { auth } from "@/server/auth";
import NavIcon from "@/components/navigation/NavIcon";
export default async function Navbar() {
  const session = await auth();
  return (
    <nav className="flex justify-between w-[90%] mx-auto py-4 items-center">
      <h1 className="text-3xl font-bold first-letter:underline cursor-pointer">My App</h1>
      <ul className="flex list-none gap-6 text-xl font-bold cursor-pointer">
        <li>Home</li>
        <li>Cart</li>
      </ul>
      <NavIcon session={session} />
    </nav>
  );
}
