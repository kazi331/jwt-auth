
const Footer = () => {
    return (
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 sm:grid-cols-2 lg:grid-cols-4 lg:text-left">
            <a
                href="https://nextjs.org/docs"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={`lg:text-2xl font-semibold`}>
                    Docs{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
            </a>

            <a
                href="https://nextjs.org/learn"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={`lg:text-2xl font-semibold`}>
                    Learn{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
            </a>

            <a
                href="https://vercel.com/templates"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={`lg:text-2xl font-semibold`}>
                    Templates{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
            </a>

            <a
                href="https://vercel.com/new"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={`lg:text-2xl font-semibold`}>
                    Deploy{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
            </a>
        </div>
    )
}

export default Footer