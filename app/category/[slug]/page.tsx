import {notFound} from "next/navigation";
import {categories} from "@/lib/catalog";
import {CatalogView} from "@/components/catalog-view";
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const c=categories.find(c=>c.slug===slug);return {title:c?`${c.name} | Apkina`:"Category not found | Apkina",description:c?.copy}}
export default async function Category({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!categories.some(c=>c.slug===slug))notFound();return <CatalogView category={slug}/>}
