import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'This is the Contact page',
    keywords: ['Contact Page', 'Matt'],
};

export default function ContactPage() {
    return (
        <span className="text-7xl"> Contact Page </span>
    )
}