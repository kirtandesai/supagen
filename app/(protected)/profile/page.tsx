import ProfileData from "@/components/profile/ProfileData";
import { redirect } from "next/navigation";
import { FetchUser } from "../actions/FetchUser";

export default async function ProfilePage() {
  const userData = await FetchUser();
  console.log("User Data:", userData);

  if (!userData || userData.length < 2) {
    console.log("No valid user data found");
    return redirect("/login");
  }

  const [userid, useremail] = userData;
  console.log("User ID:", userid);
  console.log("User Email:", useremail);

  if (!userid) {
    console.log("No user found, redirecting to login");
    return redirect("/login");
  }

  // return <ProfileData userid={userid} useremail={useremail} />;
  return <ProfileData userid={userid} useremail={useremail || ""} />;
}
