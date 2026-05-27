import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import logo from "@/assets/logo.png";
import { useEffect } from "react";
import { initFirebaseAnalytics } from "@/lib/firebase";

const SITE_URL = "https://flyai-org.web.app";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Fly AI — L'IA qui propulse les étudiants africains" },
      { name: "description", content: "Plateforme IA mobile-first pour les bourses académiques des étudiants africains." },
      { name: "author", content: "Fly AI" },
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { name: "keywords", content: "bourses, étudiants africains, IA, scholarships, candidature, lettres de motivation, coaching, universités" },
      { name: "theme-color", content: "#0B1220" },
      { name: "google-site-verification", content: "KH-iwi4DEGZF66JVRJCTTIjbailqFkO7t2eHV-NezTA" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Fly AI" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:title", content: "Fly AI — L'IA qui propulse les étudiants africains" },
      { property: "og:description", content: "Plateforme IA mobile-first pour les bourses académiques des étudiants africains." },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}${logo}` },
      { property: "og:image:alt", content: "Fly AI" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Fly AI — L'IA qui propulse les étudiants africains" },
      { name: "twitter:description", content: "Plateforme IA mobile-first pour les bourses académiques des étudiants africains." },
      { name: "twitter:image", content: `${SITE_URL}${logo}` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", href: logo, type: "image/png" },
      { rel: "apple-touch-icon", href: logo },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fly AI",
              url: SITE_URL,
              logo: `${SITE_URL}${logo}`,
              sameAs: ["https://www.linkedin.com/company/flyai-org/"],
            }),
          }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Fly AI",
              url: SITE_URL,
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <FirebaseAnalytics />
      <Outlet />
    </QueryClientProvider>
  );
}

function FirebaseAnalytics() {
  useEffect(() => {
    initFirebaseAnalytics();
  }, []);
  return null;
}
