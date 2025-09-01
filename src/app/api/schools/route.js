import { NextResponse } from "next/server";
import { query } from "@/lib/db"; // Corrected import path
import path from "path";
import { writeFile, mkdir } from "fs/promises";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const address = formData.get("address");
    const city = formData.get("city");
    const state = formData.get("state");
    const contact = formData.get("contact");
    const email_id = formData.get("email_id");
    const image = formData.get("image");

    if (!image) {
      return NextResponse.json({ message: "No image uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await image.arrayBuffer());
    const uploadDir = path.join(process.cwd(), "public", "schoolImages");

    // Ensure the directory exists
    await mkdir(uploadDir, { recursive: true });

    const filename = `${Date.now()}-${image.name}`;
    const filepath = path.join(uploadDir, filename);
    await writeFile(filepath, buffer);
    const imageUrl = `/schoolImages/${filename}`;

    await query({
      query: "INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
      values: [name, address, city, state, contact, imageUrl, email_id],
    });

    return NextResponse.json({ message: "School added successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error adding school:", error);
    return NextResponse.json({ message: "Error adding school", error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const schools = await query({
      query: "SELECT id, name, address, city, image FROM schools",
      values: [],
    });
    return NextResponse.json({ schools }, { status: 200 });
  } catch (error) {
    console.error("Error fetching schools:", error);
    return NextResponse.json({ message: "Error fetching schools", error: error.message }, { status: 500 });
  }
}
