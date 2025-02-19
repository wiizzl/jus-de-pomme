import { BackButton } from "@/components/back-button";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

type HeaderProps = {
    children?: React.ReactNode;
};

const Header = (props: HeaderProps) => {
    return (
        <header>
            <MaxWidthWrapper>
                <BackButton />
                <h2 className="text-xl font-semibold uppercase text-center mt-8">{props.children}</h2>
            </MaxWidthWrapper>
        </header>
    );
};

export { Header };
