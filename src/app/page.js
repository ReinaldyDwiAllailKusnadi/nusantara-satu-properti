import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CompanyProfile from '@/components/CompanyProfile';
import Milestones from '@/components/Milestones';
import BusinessUnits from '@/components/BusinessUnits';
import AwardsSection from '@/components/AwardsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        <Hero />
        <CompanyProfile />
        <Milestones />
        <BusinessUnits />
        <AwardsSection />
      </main>
      <Footer />
    </>
  );
}
