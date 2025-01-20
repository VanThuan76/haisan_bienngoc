import { HeroSection } from "./_sections/hero-section"
import { PricingSection } from "./_sections/pricing-section"
import { SiteHeader } from "./_sections/site-header"
import { FloatingSocialButtons } from "./_sections/floating-social-buttons"
import { ShortIntroSection } from "./_sections/short-intro-section"
import { SpaceSection } from "./_sections/space-section"
import { ShortMenuSection } from "./_sections/short-menu-section"
import { OutStandingFoodSection } from "./_sections/out-standing-food-section"
import { SiteFooter } from "./_sections/site-footer"

export default function HomePage() {
    return (
        <div className="relative min-h-screen">
            <SiteHeader />
            <main>
                <HeroSection />
                <PricingSection />
                <ShortIntroSection />
                <SpaceSection />
                <ShortMenuSection />
                <OutStandingFoodSection />
            </main>
            <SiteFooter />
            <FloatingSocialButtons />
        </div>
    )
}
