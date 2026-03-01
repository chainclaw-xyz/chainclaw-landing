export function DemoVideo() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            See It in Action
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            50 seconds. 23 skills. One agent.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-neutral-950 shadow-2xl ring-1 ring-neutral-200 -mx-6 sm:mx-0">
          <div className="overflow-x-auto">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="block min-w-[640px] w-full"
              poster=""
            >
              <source src="/demo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-neutral-400">
          Rendered with code — no screen recording
        </p>
      </div>
    </section>
  );
}
