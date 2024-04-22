import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import * as signOut from '@/actions/signOut';
import * as signIn from '@/actions/signIn';
import { auth } from '@/auth';
import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <span>Home Page</span>
    </div>
  );
}
