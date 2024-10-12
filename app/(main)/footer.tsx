export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl">
      <section className="flex flex-col">
        <section className="mt-6 flex items-center gap-2 text-[13px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50">
          © 2023-{new Date().getFullYear()}{" "}
          <a href={"https://www.201lab.top"}>@201 Lab</a>
        </section>
        <p className="mt-1 flex gap-1 text-[10px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50">
          Powered By {" "}
          <a
            href="https://github.com/hamster1963/nezha-dash"
            target="_blank"
            className="cursor-pointer font-normal underline decoration-yellow-500 decoration-2 underline-offset-2 dark:decoration-yellow-500/50"
          >
            hamster1963
          </a>
        </p>
      </section>
    </footer>
  );
}
