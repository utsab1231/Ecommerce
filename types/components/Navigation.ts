import { Session } from "next-auth";

// Navicon.tsx
export interface NaviconProps {
  session: Session | null;
}

// DefaultIcon.tsx
export interface DefaultIconProps {
  image: string | null | undefined;
}
