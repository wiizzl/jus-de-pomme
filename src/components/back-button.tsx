import { TransitionLink } from "@/components/transition-link";

const BackButton = () => {
    return (
        <TransitionLink href="/" className="uppercase text-xl font-semibold hover:underline">
            Retour
        </TransitionLink>
    );
};

export { BackButton };
