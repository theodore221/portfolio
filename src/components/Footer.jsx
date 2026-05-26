const Footer = () => {
  return (
    <footer className="border-t border-paper-border py-8 sm:px-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:items-center">
        <p className="font-clash font-bold text-ink text-[20px] tracking-[-0.02em]">
          Theodore Xavier
        </p>

        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com/theodore221"
            target="_blank"
            rel="noreferrer"
            className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.25em] hover:text-ink transition-colors duration-300"
          >
            GitHub
          </a>
          <span className="text-cedar/40 font-satoshi text-[11px]">·</span>
          <a
            href="https://linkedin.com/in/theodorexavier"
            target="_blank"
            rel="noreferrer"
            className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.25em] hover:text-ink transition-colors duration-300"
          >
            LinkedIn
          </a>
          <span className="text-cedar/40 font-satoshi text-[11px]">·</span>
          <a
            href="mailto:theodore.xavier@hotmail.com"
            className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.25em] hover:text-ink transition-colors duration-300"
          >
            Email
          </a>
        </div>

        <p className="font-satoshi font-normal text-secondary text-[11px] tabular-nums sm:text-right">
          © 2026 Theodore Xavier
        </p>
      </div>
    </footer>
  );
};

export default Footer;
