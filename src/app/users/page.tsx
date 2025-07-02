"use client";
import Link from "next/link";

export default function UsersPage() {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        <li>
          User 1 - <Link href="/users/edit">Edit</Link>
        </li>
        <li>
          User 2 - <Link href="/users/edit">Edit</Link>
        </li>
      </ul>
    </div>
  );
}
