import Link from "next/link";
import React from "react";
import {
    FaFacebook,
    FaGithub,
    FaGitlab,
    FaInstagram,
    FaTiktok,
    FaYoutube,
} from "react-icons/fa";

const SocialsGrid = () => {
    return (
        <div className="flex flex-wrap items-center gap-2 lg:gap-4">
            <Link href="https://www.youtube.com/@bulletonli" target="_blank">
                <FaYoutube className="w-8 h-8 hover:text-gray-400" />
            </Link>
            <Link href="https://www.tiktok.com/@bulletonli" target="_blank">
                <FaTiktok className="w-6 h-6 hover:text-gray-400" />
            </Link>
            <Link
                href="https://www.facebook.com/gemmuel.delapena/"
                target="_blank"
            >
                <FaFacebook className="w-7 h-7 hover:text-gray-400" />
            </Link>
            <Link href="https://instagram.com/gem.muel" target="_blank">
                <FaInstagram className="w-7 h-7 hover:text-gray-400" />
            </Link>
            <Link href="https://github.com/BulletOnli" target="_blank">
                <FaGithub className="w-7 h-7 hover:text-gray-400" />
            </Link>
            <Link href="https://gitlab.com/BulletOnli" target="_blank">
                <FaGitlab className="w-7 h-7  hover:text-gray-400" />
            </Link>
        </div>
    );
};

export default SocialsGrid;
