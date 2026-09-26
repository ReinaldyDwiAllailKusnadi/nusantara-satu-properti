import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CompanyProfile from '@/components/CompanyProfile';
import BusinessUnits from '@/components/BusinessUnits';
import Milestones from '@/components/Milestones';
import AwardsSection from '@/components/AwardsSection';
import InvestorRelations from '@/components/InvestorRelations';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CompanyProfile />
        <BusinessUnits />
        <Milestones />
        <AwardsSection />
        <InvestorRelations />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
