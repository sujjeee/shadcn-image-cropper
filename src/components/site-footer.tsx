export function SiteFooter() {
  return (
    <footer className="fixed bottom-6 left-8">
      <p className="text-balance text-center text-xs leading-loose text-muted-foreground md:text-left">
        Built by{" "}
        <a
          href={"https://x.com/sujjeeee"}
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          sujjeee
        </a>
        . The source code is available on{" "}
        <a
          href={"https://github.com/sujjeee/shadcn-image-cropper"}
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  )
}
