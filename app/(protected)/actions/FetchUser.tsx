"use server";

import { createClient } from "@/utils/supabase/server";

export async function FetchUser() {
  const supabase = createClient();
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return null; // No user found, return null
    }

    return [user.id, user.email]; // Return ID and email as an array
  } catch (error) {
    console.error("Error fetching user:", error); // Log errors for debugging
    return null; // Handle potential errors by returning null
  }
}
