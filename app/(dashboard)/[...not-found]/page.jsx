import { notFound } from "next/navigation";

/**
 * This component is here because there is a bug with the no-found component in NextJS
 * The no-found component is not being rendered when a page in the dashboard is not found.
 */
export default function NotFound() {
  notFound();
}
