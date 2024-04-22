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
      <form action={signIn.signIn}>
        <Button type="submit" className="p-2">Sign In</Button>
      </form>

      <form action={signOut.signOut}>
        <Button type="submit" className="p-2">Sign Out</Button>
      </form>
      {
        session?.user ? <div>{JSON.stringify(session.user)}</div> : <div>Signed Out</div>
      }
      <Profile />
    </div>
  );
}
