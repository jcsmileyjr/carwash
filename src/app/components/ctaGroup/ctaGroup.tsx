import CTAButton from "../ctaButton/ctaButton";

export default function CTAGroup() {
    return (
        <section className="flex flex-col gap-4 my-4">
            <CTAButton content="Maintenance Wizard" />
            <CTAButton content="Found Issues Wizard" />
        </section>
    )
}