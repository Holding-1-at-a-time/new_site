import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { services } from "@/lib/data";
import { ArrowRight, CheckCircle, Clock, DollarSign } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Services | IDA Certified Auto Detailing San Antonio, TX",
    description: "Complete auto detailing services in San Antonio. Interior cleaning, exterior detailing, paint correction, ceramic coating, and more. Mobile service available.",
    openGraph: {
        title: "Auto Detailing Services | One Detail At A Time",
        description: "Professional auto detailing services in San Antonio, TX. IDA certified detailers serving all SA areas.",
        type: "website",
    },
};




/**
 * ServicesPage component.
 * 
 * This component displays the list of all auto detailing services provided by One Detail At A Time.
 * The services are categorized into primary services and additional services.
 * Each service is displayed as a card with information such as service name, price, duration, description, and features.
 * There is also a call-to-action section at the bottom of the page to encourage users to schedule a service or contact us.
 * 
 * @returns {JSX.Element} - The ServicesPage component.
 */
export default function ServicesPage() {
    const primaryServices = services.filter(s => s.category === 'primary');
    const additionalServices = services.filter(s => s.category === 'additional');

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="py-12 lg:py-20 bg-gradient-to-br from-primary/10 via-background to-background">
                <div className="container">
                    <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                            Our Services
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Professional auto detailing services for San Antonio vehicles. IDA certified, licensed & insured.
                        </p>
                    </div>
                </div>
            </section>

            {/* Primary Services */}
            <section className="py-16">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-8">Primary Services</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {primaryServices.map((service) => (
                            <Card key={service.id} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle>{service.name}</CardTitle>
                                    <CardDescription>
                                        <div className="flex items-center gap-2 mt-2">
                                            <DollarSign className="h-4 w-4" />
                                            <span>{service.price}</span>
                                            <Separator orientation="vertical" className="h-4" />
                                            <Clock className="h-4 w-4" />
                                            <span>{service.duration}</span>
                                        </div>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-sm text-muted-foreground">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.features.slice(0, 3).map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm">
                                                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button asChild className="w-full">
                                        <Link href={`/services/${service.slug}`}>
                                            Learn More
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            {additionalServices.length > 0 && (
                <section className="py-16 bg-muted/50">
                    <div className="container">
                        <h2 className="text-3xl font-bold mb-8">Additional Services</h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {additionalServices.map((service) => (
                                <Card key={service.id} className="hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <CardTitle>{service.name}</CardTitle>
                                        <CardDescription>
                                            <div className="flex items-center gap-2 mt-2">
                                                <DollarSign className="h-4 w-4" />
                                                <span>{service.price}</span>
                                                <Separator orientation="vertical" className="h-4" />
                                                <Clock className="h-4 w-4" />
                                                <span>{service.duration}</span>
                                            </div>
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-sm text-muted-foreground">{service.description}</p>
                                        <Button asChild variant="outline" className="w-full">
                                            <Link href={`/services/${service.slug}`}>
                                                Learn More
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-16">
                <div className="container">
                    <Card className="bg-primary text-primary-foreground">
                        <CardContent className="flex flex-col items-center text-center space-y-6 p-12">
                            <h2 className="text-3xl font-bold">Ready to Book?</h2>
                            <p className="text-lg max-w-2xl text-primary-foreground/90">
                                Get a free quote for any service. We serve all San Antonio areas with mobile detailing.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" variant="secondary" asChild>
                                    <Link href="/booking">Schedule Service</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="text-primary bg-primary-foreground" asChild>
                                    <Link href="/contact">Contact Us</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}