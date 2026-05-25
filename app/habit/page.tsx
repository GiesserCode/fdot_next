import { redirect } from 'next/navigation';

/** Redirect /habit → /habits (häufiger Tippfehler) */
export default function HabitRedirectPage() {
  redirect('/habits');
}
