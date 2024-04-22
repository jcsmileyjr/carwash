import CTAButton from "../ctaButton/ctaButton";

export default function CTAGroup() {
    return (
        <section className="flex flex-col gap-4 my-4">
            <CTAButton content="Record Maintenance" route="maintenance" />
            <CTAButton content="Log an Issue" route="foundIssue" />
        </section>
    )
}