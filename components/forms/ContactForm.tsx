"use client";

type ContactFormProps = {
  showPackageField?: boolean;
};

export function ContactForm({ showPackageField = false }: ContactFormProps) {
  return (
    <form
      className="mt-9"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="mb-2 grid grid-cols-2 gap-6 max-xs:grid-cols-1 max-xs:gap-0">
        <div className="mb-7">
          <label
            htmlFor="first-name"
            className="mb-2 block text-xs uppercase tracking-[0.05em] opacity-70"
          >
            First name*
          </label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            required
            className="w-full border-b-2 border-gold bg-transparent px-0.5 py-2 text-[15px] text-white outline-none placeholder:text-white/40"
          />
        </div>
        <div className="mb-7">
          <label
            htmlFor="last-name"
            className="mb-2 block text-xs uppercase tracking-[0.05em] opacity-70"
          >
            Last name
          </label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            className="w-full border-b-2 border-gold bg-transparent px-0.5 py-2 text-[15px] text-white outline-none placeholder:text-white/40"
          />
        </div>
      </div>

      <div className="mb-7">
        <label
          htmlFor="email"
          className="mb-2 block text-xs uppercase tracking-[0.05em] opacity-70"
        >
          Email*
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border-b-2 border-gold bg-transparent px-0.5 py-2 text-[15px] text-white outline-none placeholder:text-white/40"
        />
      </div>

      {showPackageField ? (
        <div className="mb-7">
          <label
            htmlFor="package"
            className="mb-2 block text-xs uppercase tracking-[0.05em] opacity-70"
          >
            Package or session you&apos;re interested in
          </label>
          <input
            type="text"
            id="package"
            name="package"
            placeholder="e.g. Standard, or In-Person session"
            className="w-full border-b-2 border-gold bg-transparent px-0.5 py-2 text-[15px] text-white outline-none placeholder:text-white/40"
          />
        </div>
      ) : null}

      <div className="mb-7">
        <label
          htmlFor="message"
          className="mb-2 block text-xs uppercase tracking-[0.05em] opacity-70"
        >
          Write a message
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="min-h-20 w-full resize-y border-b-2 border-gold bg-transparent px-0.5 py-2 text-[15px] text-white outline-none placeholder:text-white/40"
        />
      </div>

      <button
        type="submit"
        className="inline-flex h-[50px] items-center justify-center rounded-[3px] border-2 border-gold bg-gold px-[34px] text-[15px] font-bold tracking-[0.02em] text-on-gold transition-opacity hover:opacity-85"
      >
        Submit
      </button>
    </form>
  );
}
