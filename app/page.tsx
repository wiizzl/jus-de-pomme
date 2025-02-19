import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { TransitionLink } from "@/components/transition-link";

import { config } from "@/config";

export default function HomePage() {
    return (
        <main>
            <section>
                <MaxWidthWrapper>
                    <h1 className="uppercase text-2xl font-semibold">{config.title}</h1>
                    <nav className="flex flex-col mt-1 -space-y-1">
                        {config.Navigation.map((item, index) => (
                            <TransitionLink
                                href={`/${item.href}`}
                                className="uppercase text-lg font-semibold hover:underline"
                                key={index}
                            >
                                {item.name}
                            </TransitionLink>
                        ))}
                    </nav>
                </MaxWidthWrapper>
                {/* TODO: matterjs effect */}
            </section>
        </main>
    );
}
