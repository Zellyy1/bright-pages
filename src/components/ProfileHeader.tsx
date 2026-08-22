import { useEffect, useRef, useState } from "react";
import { Camera, X } from "lucide-react";

import defaultAvatar from "@/assets/avatar.jpg";
import { profile } from "@/data/profile";

const STORAGE_KEY = "profile-avatar";
const MAX_BYTES = 2 * 1024 * 1024;

export function ProfileHeader() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setAvatar(stored);
    } catch {
      /* ignore */
    }
  }, []);

  const onFile = (file: File | undefined) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Please choose an image file.");
      return;
    }
    if (file.size > MAX_BYTES) {
      setError("Image must be smaller than 2 MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result);
      setAvatar(result);
      setError(null);
      try {
        window.localStorage.setItem(STORAGE_KEY, result);
      } catch {
        setError("Could not save the image in this browser.");
      }
    };
    reader.readAsDataURL(file);
  };

  const clear = () => {
    setAvatar(null);
    setError(null);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  };

  return (
    <section className="flex flex-col gap-5 sm:flex-row sm:items-start">
      <div className="relative shrink-0">
        <img
          src={avatar ?? defaultAvatar}
          alt={`${profile.name} profile picture`}
          width={96}
          height={96}
          className="h-24 w-24 rounded-full border border-border object-cover"
        />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          aria-label="Upload profile picture"
          className="absolute -bottom-1 -right-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition-colors hover:bg-accent"
        >
          <Camera className="h-4 w-4" />
        </button>
        {avatar ? (
          <button
            type="button"
            onClick={clear}
            aria-label="Remove profile picture"
            className="absolute -top-1 -right-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <X className="h-3 w-3" />
          </button>
        ) : null}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(event) => {
            onFile(event.target.files?.[0]);
            event.target.value = "";
          }}
        />
      </div>

      <div className="min-w-0">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">{profile.name}</h1>
        <p className="mt-0.5 text-sm text-muted-foreground">{profile.role}</p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {profile.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {profile.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-foreground underline-offset-4 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
        {error ? <p className="mt-2 text-xs text-destructive">{error}</p> : null}
      </div>
    </section>
  );
}
