export default function Footer() {
    return (
        <footer className="bg-pooch-blue-2 flex-col text-center md:flex md:flex-row -mx-6 md:mx-0 py-3.5 text-white text-base md:justify-around md:px-24 font-Museo-Sans-Rounded-500">
            <div className="hidden md:flex md:gap-x-4">
                <span>Pooch Technologies Inc</span>
                <div className="flex gap-x-2">
                    <img className="self-center" src="/mail-icon.svg" />
                    <span>
                        info@poochapp.com
                    </span>
                </div>
            </div>
            <div className="flex flex-col">
                <span className="md:hidden">Pooch Technologies Inc</span>
                <span>Privacy Policy | Terms of Use</span>
            </div>
        </footer>
    )
}
