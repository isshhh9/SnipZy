"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Home, User } from "lucide-react";
import { useNotification } from "./Notification";

export default function Header() {
  const { data: session } = useSession();
  const { showNotification } = useNotification();

  const handleSignOut = async () => {
    try {
      await signOut();
      showNotification("Signed out successfully", "success");
    } catch {
      showNotification("Failed to sign out", "error");
    }
  };

  return (
    <div className="navbar bg-base-300 sticky top-0 z-40 py-2" style={{ fontSize: "80%" }}>
      <div className="container mx-auto flex items-center">
        <div className="flex-1 flex justify-center lg:justify-start px-1">
          <Link
            href="/"
            className="btn btn-ghost text-xl gap-1 normal-case font-bold min-h-0 h-8"
            prefetch={true}
            onClick={() =>
              showNotification("Welcome to SnipZy", "info")
            }
            style={{ fontSize: "1.716rem", padding: "0.25rem 0.5rem" }}
          >
            <Home className="w-[32.947px] h-[32.947px]" />
            <span className="text-[1.716rem]">SnipZy</span>
          </Link>
        </div>
        <div className="flex flex-1 justify-end px-1">
          <div className="flex items-stretch gap-1">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle min-h-0 h-8 w-8"
              >
                <User className="w-6 h-6" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] shadow-lg bg-base-100 rounded-box w-52 mt-3 py-1"
                style={{ fontSize: "90%" }}
              >
                {session ? (
                  <>
                    <li className="px-3 py-1">
                      <span className="text-xs opacity-70">
                        {session.user?.email?.split("@")[0]}
                      </span>
                    </li>
                    <div className="divider my-1"></div>

                    <li>
                      <Link
                        href="/upload"
                        className="px-3 py-1 hover:bg-base-200 block w-full"
                        onClick={() =>
                          showNotification("Welcome to Admin Dashboard", "info")
                        }
                      >
                        Video Upload
                      </Link>
                    </li>

                    <li>
                      <button
                        onClick={handleSignOut}
                        className="px-3 py-1 text-error hover:bg-base-200 w-full text-left"
                      >
                        Sign Out
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link
                      href="/login"
                      className="px-3 py-1 hover:bg-base-200 block w-full"
                      onClick={() =>
                        showNotification("Please sign in to continue", "info")
                      }
                    >
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}