import Buy from "@/components/buy/Buy";
import CarInsurance from "@/components/carInsurance/CarInsurance";
import CarModel from "@/components/carModel/CarModel";
import Details from "@/components/details/Details";
import Policy from "@/components/policy/Policy";
import Product from "@/components/product/Product";
import Review from "@/components/review/Review";
import Search from "@/components/search/Search";
import TypeInsurance from "@/components/typeInsurance/TypeInsurance";
import TypesOfPolicies from "@/components/typesOfPolicies/TypesOfPolicies";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <CarInsurance />
      <Review/>
      <Details/>
      <TypesOfPolicies/>
      <TypeInsurance/>
      <Policy/>
      <Buy/>
      <CarModel/>
      <Search/>
      <Product/>
    </div>
  );
}
