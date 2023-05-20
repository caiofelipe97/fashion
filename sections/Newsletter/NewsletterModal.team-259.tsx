export interface Props {
    /**
     * @default Get 10% off on your first purchase by subscribing to our newsletter:
     */
  description: string;
}

export default function NewsletterModal({ description }: Props) {
  return (
    <dialog
      open
      class="w-full max-w-full bg-transparent p-0 backdrop-opacity-50 sm:flex-1 sm:flex-row"
    >
      <button class="absolute right-2 top-2 h-10 w-10 rounded-full border-[1px] border-neutral-400 bg-white">
        X
      </button>
      <div class="sm:flex-1">
        <img
          src="https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000"
          alt="background"
          class="object-cover"
        />
      </div>

      <div class="flex flex-col gap-4 bg-white p-4 sm:flex-1">
        <h1 class="text-2xl leading-6 text-neutral-800">Welcome</h1>
        <h6 class="text-base leading-6 text-neutral-800">
          {description}
        </h6>
        <div class="flex flex-col gap-2">
          <label
            htmlFor="email"
            class="block gap-2 text-base leading-6 text-neutral-900"
          >
            First name
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            class="w-full border-[1px] border-neutral-300 px-3 py-2.5 text-sm"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label
            htmlFor="email"
            class="block gap-2 text-base leading-6 text-neutral-900"
          >
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            class="w-full border-[1px] border-neutral-300 px-3 py-2.5 text-sm"
          />
        </div>
        <div class="flex gap-2">
          <input type="checkbox" />
          <label class="text-sm">
            I accept the <span class="cursor-pointer underline">terms</span>
          </label>
        </div>
        <button class="bg-slate-800 px-3 py-2 text-base text-white">
          Button
        </button>
      </div>
    </dialog>
  );
}
