import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Icons } from '@/components/icons'
import { siteConfig } from '@/config/site'

export function FloatingSocialButtons() {
    return (
        <div className="fixed right-4 bottom-0 -translate-y-1/4 flex flex-col gap-4 z-50">
            <Button asChild size="icon" className="rounded-full bg-slate-100 hover:bg-slate-200 relative p-[6px]">
                <Link href={siteConfig.links.google_map} target="_blank" rel="noopener noreferrer">
                    <Icons.google_map className="size-10" />
                    <span className="sr-only">Địa chỉ</span>
                    <span className="absolute -inset-0.5 animate-ping bg-emerald-600 rounded-full opacity-75"></span>
                </Link>
            </Button>
            <Button asChild size="icon" className="rounded-full bg-slate-100 hover:bg-slate-200 relative p-1">
                <Link href={siteConfig.links.phone}>
                    <Icons.phone_customize className="size-10" />
                    <span className="sr-only">Số điện thoại</span>
                    <span className="absolute -inset-0.5 animate-ping bg-green-600 rounded-full opacity-75"></span>
                </Link>
            </Button>
            <Button asChild size="icon" className="rounded-full bg-slate-100 hover:bg-slate-200 relative p-1">
                <Link href={siteConfig.links.zalo}>
                    <Icons.zalo className="size-10" />
                    <span className="sr-only">Zalo</span>
                    <span className="absolute -inset-0.5 animate-ping bg-sky-600 rounded-full opacity-75"></span>
                </Link>
            </Button>
            <Button asChild size="icon" className="rounded-full bg-slate-100 hover:bg-slate-200 relative p-1">
                <Link href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer">
                    <Icons.facebook className="size-10" />
                    <span className="sr-only">Facebook</span>
                    <span className="absolute -inset-0.5 animate-ping bg-blue-600 rounded-full opacity-75"></span>
                </Link>
            </Button>
        </div>
    )
}
