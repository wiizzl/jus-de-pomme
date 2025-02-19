import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { TransitionLink } from "@/components/transition-link";

export default function NotFoundPage() {
    return (
        <main>
            <section>
                <MaxWidthWrapper>
                    <h1 className="text-3xl font-semibold">404</h1>
                    <TransitionLink href="/" className="uppercase text-lg font-semibold hover:underline">
                        Retour à l'accueil
                    </TransitionLink>
                </MaxWidthWrapper>
            </section>
        </main>
    );
}
