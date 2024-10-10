import { ReactNode } from "react";
import { useTitle } from "ahooks";
import { Card, CardBody, Button, Link } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import {
    HealthcareReminderIcon,
    MedicalRecordIcon,
    OnlineAppointmentIcon,
} from "@/assets";

type FeatureCardProps = {
    icon: ReactNode;
    title: string;
    description: string;
};
const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
    return (
        <Card className="max-h-[328px]  px-5 py-8" radius="none">
            <CardBody className="">
                <div className="text-[72px] mb-5">{icon}</div>
                <h4 className="text-textDefault  relative after:content-[''] h-12 mb-5 after:absolute after:left-0 after:bottom-0 after:w-[3.5em] after:h-[3px]  after:bg-primary after:rounded-md font-bold ">
                    <div>{title}</div>
                </h4>
                <p className="text-sm text-subText">{description}</p>
            </CardBody>
        </Card>
    );
};

export default function IndexPage() {
    useTitle("Home | MediTracker");
    const features = [
        {
            icon: <OnlineAppointmentIcon />,
            title: "Medical Record",
            description:
                "View and manage all health information in one place, making it easier to track medical history and treatments",
        },
        {
            icon: <MedicalRecordIcon />,
            title: "Online Appointment",
            description:
                "Easily schedule and manage doctor visits anytime, without the need for phone calls or in-person bookings",
        },
        {
            icon: <HealthcareReminderIcon />,
            title: "Healthcare Reminder",
            description:
                "Helps patients stay on track with upcoming appointments, medication schedules, and health check-ups",
        },
    ];
    return (
        <DefaultLayout>
            <section className="flex flex-col justify-center gap-4 px-20 md:py-10 h-full">
                <img
                    src="/hero.svg"
                    alt="hero"
                    className="absolute  right-20   h-[500px] top-4    2xl:top-[6rem] 3xl:top-12 3xl:h-[653px]"
                />
                <h1 className="text-6xl  text-primary font-bold">MediTracker</h1>
                <div className="text-2xl max-w-2xl text-textDefault">
                    A platform for patients and healthcare providers to access complete
                    medical records, enabling seamless data sharing across hospitals for
                    better coordinated care
                </div>
                <div>
                    <Button
                        as={Link}
                        href="/register"
                        size="lg"
                        radius="sm"
                        color="primary"
                    >
                        Register Now
                    </Button>
                </div>
                <div className="gap-8 grid grid-cols-1 sm:grid-cols-3 2xl:mt-12 3xl:mt-20 px-24">
                    {features.map((item, index) => (
                        <FeatureCard key={index} {...item} />
                    ))}
                </div>
            </section>
        </DefaultLayout>
    );
}
