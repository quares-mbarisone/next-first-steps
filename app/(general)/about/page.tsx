import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Page',
    description: 'This is the About Page',
    keywords: ['About Page', 'Matt'],
};

export default function AboutPage() {
    return (
        <span className="text-7xl"> About Page </span>
    )
}
