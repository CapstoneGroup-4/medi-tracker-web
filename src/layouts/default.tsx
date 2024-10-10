export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            className="relative flex flex-col h-screen"
            style={{
                background: "linear-gradient(153deg, #FFFFFF 0%, #EAFAFC 100%)",
            }}
        >
            <main className="flex-grow ">{children}</main>
        </div>
    );
}
