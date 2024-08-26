export function Footer() {
    return (
        <footer className="glassmorphism border border-zinc-950 dark:border-gray-700 rounded-lg shadow-md m-4 p-4 relative">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between  ">
                <div className="flex flex-col items-center md:items-start">
                    <p className="text-sm relative text-center text-gray-500 dark:text-gray-400">
                        Not affiliated with Discord Inc.
                    </p>
                    <p className="text-sm relative text-center text-gray-500 dark:text-gray-400">
                        "Discord" is a registered trademark of Discord Inc.
                    </p>
                </div>

            </div>
        </footer>
    );
}
