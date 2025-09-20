import { getCurrentUser } from "@/lib/auth";
import AppHeaderClient from "./AppHeaderClient";

export default async function AppHeader() {
  const user = await getCurrentUser();
  
  return <AppHeaderClient user={user} />;
}
