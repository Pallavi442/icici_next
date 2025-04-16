import Buy from "@/components/ui/Buy";
import CarInsurance from "@/components/ui/CarInsurance";
import CarModel from "@/components/ui/CarModel";
import Details from "@/components/ui/Details";
import Include from "@/components/ui/Include";
import Policy from "@/components/ui/Policy";
import Premium from "@/components/ui/Premium";
import Product from "@/components/ui/Product";
import Questions from "@/components/ui/Questions";
import Ratings from "@/components/ui/Ratings";
import Review from "@/components/ui/Review";
import Search from "@/components/ui/Search";
import TypeInsurance from "@/components/ui/TypeInsurance";
import TypesOfPolicies from "@/components/ui/TypesOfPolicies";

export default function Home() {
  return (
    <div className="pt-[104px]">
        <CarInsurance />
        <Review />
        <Details />
        <TypesOfPolicies />
        <TypeInsurance />
        <Policy />
        <Include />
        <Buy />
        <Premium />
        <Questions />
        <Ratings />
        <Search />
        <CarModel />
        <Product />
    </div>
  );
}
