import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { auth } from "@/auth";
import * as actions from "@/actions";

export default async function Header() {
  const session = await auth();

  let authContent: React.ReactNode;
  
  if (session?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.user.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <form action={actions.signOut}>
            <Button type="submit">Sign Out</Button>
          </form>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <form action={actions.signIn}>
          <NavbarItem>
            <Button
              type="submit"
              color="secondary"
              variant="bordered"
              className="p-1"
            >
              Sign In
            </Button>
          </NavbarItem>
        </form>

        <form action={actions.signIn}>
          <NavbarItem>
            <Button
              type="submit"
              color="primary"
              variant="bordered"
              className="p-1"
            >
              Sign Up
            </Button>
          </NavbarItem>
        </form>
      </>
    );
  }

  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Brainstorming
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input placeholder="Search" />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">{authContent}</NavbarContent>
    </Navbar>
  );
}
