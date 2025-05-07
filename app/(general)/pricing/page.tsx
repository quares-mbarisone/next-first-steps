import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'This is the Pricing Page',
    keywords: ['Pricing Page', 'Matt'],
};

export default function PricingPage() {
    return (
        <span className="text-7xl"> Pricing Page </span>
    )
}