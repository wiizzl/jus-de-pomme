type MaxWidthWrapperProps = {
    children: React.ReactNode;
    className?: string;
};

const MaxWidthWrapper = (props: MaxWidthWrapperProps) => {
    return <div className={`m-2.5 sm:m-5 ${props.className}`}>{props.children}</div>;
};

export { MaxWidthWrapper };
