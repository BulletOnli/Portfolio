import { Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Socials = () => {
    return (
        <div className="flex items-center gap-2 lg:gap-4">
            <Link href="https://www.youtube.com/@bulletonli" target="_blank">
                {/* <Image src="/socials/youtube.png" w={39} h={39} /> */}
                <FaYoutube className="w-8 h-8 text-[#F9FAFB]" />
            </Link>
            <Link
                href="https://www.tiktok.com/@bulletonli"
                target="_blank"
                // className="-ml-[1rem]"
            >
                {/* <Image src="/socials/tiktok.png" w={42} h={42} /> */}
                <FaTiktok className="w-6 h-6 text-[#F9FAFB]" />
            </Link>
            <Link
                href="https://www.facebook.com/gemmuel.delapena/"
                target="_blank"
                // className="-ml-[1rem]"
            >
                {/* <Image src="/socials/facebook.png" w={37} h={37} /> */}
                <FaFacebook className="w-7 h-7 text-[#F9FAFB]" />
            </Link>
            <Link
                href="https://instagram.com/gem.muel"
                target="_blank"
                // className="-ml-[1rem]"
            >
                {/* <Image src="/socials/instagram.png" w={45} h={45} /> */}
                <FaInstagram className="w-7 h-7 text-[#F9FAFB]" />
            </Link>
        </div>
    );
};

export default Socials;
