import {notFound,permanentRedirect} from "next/navigation";
import {products} from "@/lib/catalog";
import {ProductDetail} from "@/components/product-detail";
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=products.find(p=>p.slug===slug);return {title:p?`${p.name} | Apkina`:"Product not found | Apkina",description:p?.summary}}
export default async function Product({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const legacy:Record<string,string>={"100-pro-rgb-video-light":"/products/100-pro-rgb","ap1000-rgb-light":"/products/ap1000","creator-video-tripod":"/category/tripods","octa-softbox":"/category/modifiers","creator-speedlight":"/category/lighting","camera-cage-kit":"/category/accessories","creator-shotgun-mic":"/shop"};if(legacy[slug])permanentRedirect(legacy[slug]);const p=products.find(p=>p.slug===slug);if(!p)notFound();return <ProductDetail product={p}/>}
